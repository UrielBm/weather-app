import { useState } from "react";
import Error from "../Error/Error";
import "./Style.scss";
import PropTypes from "prop-types";
const Form = ({ search, Setsearch, Setpeticion }) => {
  const [error, setError] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    Setsearch({
      ...search,
      [name]: value.toLowerCase(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "" || pais.trim() === "") {
      return setError(true);
    }
    setError(false);
    Setpeticion(true);
  };
  const { ciudad, pais } = search;
  return (
    <form className="wrapperForm" onSubmit={handleSubmit}>
      {error ? (
        <Error text="Debes colocar el nombre de una ciudad y un país" />
      ) : null}
      <section className="wrapperInput">
        <input
          type="text"
          className="input"
          name="ciudad"
          id="ciudad"
          placeholder="escribe tu ciudad"
          value={ciudad}
          onChange={handleOnChange}
        />
        <label className="label" htmlFor="ciudad">
          Ciudad :
        </label>
      </section>
      <section className="wrapperInput">
        <select
          className="select"
          name="pais"
          id="pais"
          value={pais}
          onChange={handleOnChange}
        >
          <option value="">--Selecciona un país--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label className="label" htmlFor="pais">
          País :
        </label>
      </section>
      <section className="wrapperButton">
        <button className="button">Buscar clima</button>
      </section>
    </form>
  );
};
Form.propTypes = {
  search: PropTypes.object.isRequired,
  Setsearch: PropTypes.func.isRequired,
  Setpeticion: PropTypes.func.isRequired,
};
export default Form;
