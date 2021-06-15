const obtenerUsuario = require("./../index").obtenerDatosDeUsuario;

const gar1X64 = require("./respuestas/gar1X64");

const expect = require("chai").expect;

var nock = require("nock");

describe("Test de datos de diferentes usuarios de Github", () => {
  beforeEach(() => {
    nock("https://api.github.com").get("/users/gar1X64").reply(200, gar1X64);
  });

  it('Obtener datos del usuario "garX64"', () => {
    return obtenerUsuario("gar1X64").then((respuesta) => {
      //Probar el tipo de variable que obtenemos de respuesta. Tiene que ser un objeto
      expect(typeof respuesta).to.equal("object");
      //Comprobar que el usuario de la api es el descrito anteriormente
      expect(respuesta.login).to.equal("gar1X64");
      //Comprobar que el id del usuario es numerico
      expect(typeof respuesta.id).to.equal("number");
      //Location = xxxxxxxxxxxxxxxxxxxx
      expect(typeof respuesta.location).to.equal("object");
    });
  });
});
