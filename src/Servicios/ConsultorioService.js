import axios from 'axios'

const consultorio = "http://localhost:8000/consultorio";

class ConsultorioService {
    listar_consultorios() {
        return axios.get(consultorio + "/all")
            .then(response => response.data);
    }
}

export default new ConsultorioService();