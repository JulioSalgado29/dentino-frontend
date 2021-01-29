import axios from 'axios'
const login = "https://dentino-303017.rj.r.appspot.com/login";
const admin = "https://dentino-303017.rj.r.appspot.com/admin";
const user = "https://dentino-303017.rj.r.appspot.com/usuario";

class UsuarioService {

    registrar_admin(/*nombre, apellido, email, fechaNac, direccion, telefono, genero, username, password*/) {
        const usuario = {
            "persona": { "nombre": "Gregory", "apellido": "Recalde", "email": "juliosalgado2998@gmail.com", "fechaNac": "1999-02-07", 
            "direccion": "Heredia586", "telefono": "920691763", "genero": "M" },
            "usuario": {"username": "username","password": "password","fechaCre": "2020-07-10"}
        };
        const auth = { 
            auth: {username: 'admin',"password": '1234abcd'}
        };
        return axios.post(admin + "/registration", usuario, auth);
    }
    registrar_user(/*nombre, apellido, email, fechaNac, direccion, telefono, genero, username, password*/) {
        const usuario = {
            "persona": { "nombre": "Gregory", "apellido": "Recalde", "email": "gregoryrecaldegutierrez@gmail.com", "fechaNac": "1999-02-07", 
            "direccion": "Heredia586", "telefono": "920691763", "genero": "M" },
            "usuario": {"username": "gregory","password": "password"}
        };
        return axios.post(user + "/registration", usuario);
    }
    login(username, password) {
        const usuario = {"username": username,"password": password};
        return axios.post(login + "/verificando", usuario).then(response => {
            localStorage.setItem("usuario", JSON.stringify(response.data));
        });
    }
    actualizar_estado(username, token) {
        return axios.post(login + "/actualizar-estado", { username,token }).then(response => {
            localStorage.setItem("usuario", JSON.stringify(response.data));
        });
    }
    verificar_usuario(username){
        return axios.put(user + "/verificar-estado", {username}).then(response => {
            localStorage.setItem("usuario2", JSON.stringify(response.data));
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("usuario"));;
    }
    getCurrentState() {
        return JSON.parse(localStorage.getItem("usuario2"));;
    }
    logout() {
        localStorage.removeItem("usuario");
    }
}

export default new UsuarioService();