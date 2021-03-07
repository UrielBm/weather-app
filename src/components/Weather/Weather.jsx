import Subtitle from "../../Subtitle";
import "./Style.scss";
import { calculateTemp, tempColor } from "../../helpers";
import PropTypes from "prop-types";
const Weather = ({ weather }) => {
  const { main, name } = weather;
  if (!name) {
    return null;
  }
  return (
    <section className="wrapperWeather">
      <div className="wrapperData">
        <div className="wrapperSubtitle">
          <Subtitle subtitle={`Temperatura de: ${name}`} />
        </div>
        <article className="wrapperInfo">
          <p>Temperatura actual:</p>
          <p className={`data ${tempColor(main.temp)}`}>
            {calculateTemp(main.temp)} <span>&#x2103;</span>
          </p>
        </article>
        <article className="wrapperInfoExtra">
          <p>Temperatura minima:</p>
          <p className={`data ${tempColor(main.temp_min)}`}>
            {calculateTemp(main.temp_min)}
            <span>&#x2103;</span>
          </p>
        </article>
        <article className="wrapperInfoExtra">
          <p>Temperatura maxima:</p>
          <p className={`data ${tempColor(main.temp_max)}`}>
            {calculateTemp(main.temp_max)}
            <span>&#x2103;</span>
          </p>
        </article>
      </div>
      <article className="wrapperHumedad">
        <p className="text">Humedad:</p>
        <p className="data">
          {main.humidity}
          <span>%</span>
        </p>
      </article>
    </section>
  );
};
Weather.propTypes = {
  weather: PropTypes.object.isRequired,
};
export default Weather;
