import axios from 'axios'

const trabajador = "http://localhost:8000/trabajador";
class TrabajadorService {
    listarTrabajadores(keyword) {
        return axios.get(trabajador + "/buscar", { params: { "keyword": keyword } })
            .then(response => response.data);
    }

    eliminarTrabajador(usuarioId) {
        return axios.post(trabajador + "/delete", { "persona": { "id": usuarioId } })
            .then(response => response.data);
    }


    editar_trabajador(id, nombre, apellido, email, fechaNac, direccion, telefono, genero, dni) {

        const trabajadorAux = {
            "persona": {
                "id": id, "nombre": nombre, "apellido": apellido, "email": email, "fechaNac": fechaNac,
                "direccion": direccion, "telefono": telefono, "genero": genero, "dni": dni
            }
        };
        return axios.put(trabajador + "/update", trabajadorAux).then(response => {
            localStorage.removeItem("dato");
            localStorage.setItem("dato", JSON.stringify(response.data));
        });
    }

    registrarTrabajador(nombre, apellido, email, fechaNac, direccion, telefono, genero, dni, username, password) {
        var tratamientoMedicoJson = '{ "tratamientoMedicoB":"no", "tratamientoMedico":""}';
        var alergiasJson = '{ "alergiasB":"no", "alergias":""}';
        var problemasCardiacosJson = '{ "problemasB":"no", "problemasCardiacos":""}';
        var diabetesJson = '{ "diabetesB":"no", "diabetes":""}';
        var fumaJson = '{ "fumaB":"no", "fumaHC":"", "fumaF":""}';
        const trabajadorObj = {
            "persona": {
                "nombre": nombre, "apellido": apellido, "email": email, "fechaNac": fechaNac,
                "direccion": direccion, "telefono": telefono, "genero": genero, "dni": dni
            },
            "usuario": {
                "username": username, "password": password
            },
            "antecedente": {
                "tratamientoMedico": tratamientoMedicoJson, "alergias": alergiasJson, "presionArterial": "normal",
                "problemasCardiacos": problemasCardiacosJson, "diabetes": diabetesJson, "sangrado": 0, "fuma": fumaJson
            }
        };

        return axios.post(trabajador + "/registration", trabajadorObj);
    }
}
export default new TrabajadorService();