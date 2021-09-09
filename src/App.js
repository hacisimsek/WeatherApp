import axios from "axios"
import React, {useEffect, useState} from 'react'
import { usePosition } from "use-position"
import HavaDurumu from "./components/HavaDurumu"
import "./App.css"
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const App = () => {
    const [wheather,setWheather] = useState()

    const {latitude, longitude} = usePosition();

    const getWeatherData = async (lat, lon) => {
        
        // const key = process.env.REACT_APP_WEATHER_API_KEY

        const lang = navigator.language.split("-")[0]; 
        console.log(lang)
        try {
            const { data }= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c700963058c7edd7376ada4312315048&lang=${lang}&units=metric`);
            setWheather(data);
            console.log({data})
        } catch {
            alert("veri alınırken bir hata oluştu.")
        }
    }
    useEffect(() => {
        latitude&&longitude&&getWeatherData(latitude,longitude); 
    }, [latitude, longitude])

    return (
        <div className = "App">
             <div className= "box">
                <h2>Hava durumu</h2>
                <HavaDurumu wheather = {wheather}/>
             </div>
        </div>
    )
}

export default App;