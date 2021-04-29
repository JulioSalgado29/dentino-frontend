import axios from 'axios'

const consultorio = "http://localhost:8000/consultorio";

class ConsultorioService {
    listarConsultorios() {
        return axios.get(consultorio + "/all")
            .then(response => response.data);
    }

    eliminarConsultorio(codigoConsultorio) {
        return axios.post(consultorio + "/delete", { "codigo": codigoConsultorio })
            .then(response => response.data);
    }


    editarConsultorio(id, codigo, nombre, direccion, aforo, estado) {

        const consultorioAux = {
            "id": id, "codigo": codigo, "nombre": nombre, "direccion": direccion,
            "aforo": aforo, "estado": estado
        };
        return axios.put(consultorio + "/update", consultorioAux).then(response => {
            localStorage.removeItem("dato");
            localStorage.setItem("dato", JSON.stringify(response.data));
        });
    }

    registrarConsultorio(nombre, direccion, aforo) {
        const consultorioAux = {
            "nombre": nombre, "direccion": direccion, "aforo": aforo
        };
        return axios.post(consultorio + "/registration", consultorioAux);
    }
}

export default new ConsultorioService();