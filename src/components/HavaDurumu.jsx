import React from 'react'

const HavaDurumu = (props) => {
    const { wheather } = props;
    console.log(wheather)

    if (!wheather) {
        return <p>Yükleniyor...</p>;
    }

    return (
        <React.Fragment>
            <h3>{wheather.name}</h3>
            <h4>{wheather.weather.map(data => data.description).join(",")}</h4>
            <p>{wheather.main.temp} C</p>
            <p>{new Date(wheather.dt*1000).toLocaleDateString( )}</p>
        </React.Fragment>
    );
}
export default HavaDurumu