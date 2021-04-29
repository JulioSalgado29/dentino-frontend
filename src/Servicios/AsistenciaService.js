import axios from 'axios'
//const admin = "https://dentino-303017.rj.r.appspot.com/admin";
//const paciente = "http://localhost:8080/paciente";

const asistencia = "http://localhost:8000/asistencia";

class AsistenciaService {
    marcarAsistencia(dni, codigoConsultorio) {
        return axios.get(asistencia + "/marcar", { params: { "dni": dni, "codigoConsultorio": codigoConsultorio } })
            .then(response => response.data);
    }
    listarAsistencias() {
        return axios.get(asistencia + "/all")
            .then(response => response.data);
    }
}

export default new AsistenciaService();