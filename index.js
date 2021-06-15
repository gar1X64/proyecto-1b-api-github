const axios = require("axios");

module.exports = {
  /**
   * introducir el usuario de igthub para obtener sus datos de la api
   * @example
   * usuario = 'gar1X64'
   * @param {string} usuario Usuario del que queremos los datos de la api
   * @returns
   */
  obtenerDatosDeUsuario: function (usuario) {
    const url = `https://api.github.com/users/${usuario}`;
    return axios
      .get(url)
      .then((data) => data.data)
      .catch((error) => console.log(error));
  },
};
