import { useEffect, useState } from "react";
import "./App.scss";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import Weather from "./components/Weather/Weather";
function App() {
  const [search, Setsearch] = useState({
    ciudad: "",
    pais: "",
  });
  const [resultado, Setresultado] = useState({});
  const [peticion, Setpeticion] = useState(false);
  const [error, SetError] = useState(false);
  const { ciudad, pais } = search;
  useEffect(() => {
    const handleGetWeather = async () => {
      if (peticion) {
        const appid = "7c9b2fd870b1349bcd75f7258a5d7071";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;
        const queryWeather = await fetch(url);
        const weather = await queryWeather.json();
        Setresultado(weather);
        Setpeticion(false);
        if (weather.cod === "404") {
          SetError(true);
        } else {
          SetError(false);
        }
      }
    };
    handleGetWeather();
    // eslint-disable-next-line
  }, [peticion]);
  return (
    <>
      <Header title="Clima App" />
      <main className="wrapperMain">
        <section className="section">
          <Form
            search={search}
            Setsearch={Setsearch}
            Setpeticion={Setpeticion}
          />
        </section>
        <section className="section">
          {error ? (
            <Error text="No logramos encontrar resultados" />
          ) : (
            <Weather weather={resultado} />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
