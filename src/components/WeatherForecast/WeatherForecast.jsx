import "./WeatherForecast.css";

const WeatherForecast = ({forecast}) => {
    const {day, img, imgAlt, conditions, time} = forecast
  return (
    <div className="weather">
      <ul>
        <h2>Day of the Week</h2>
        <p>{day}</p>
        <img src={img} alt={imgAlt} />
        <p>
          <span>Conditions: </span>{conditions}
        </p>
        <p>
          <span>time: </span>{time}
        </p>
      </ul>
    </div>
  );
};

export default WeatherForecast;
