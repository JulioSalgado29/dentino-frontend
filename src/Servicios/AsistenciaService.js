import axios from 'axios'
//const admin = "https://dentino-303017.rj.r.appspot.com/admin";
//const paciente = "http://localhost:8080/paciente";

const asistencia = "http://localhost:8000/asistencia";

class AsistenciaService {
    marcarAsistencia(dni) {
        return axios.get(asistencia + "/marcar", { params: { "dni": dni } })
            .then(response => response.data);
    }
}

export default new AsistenciaService();