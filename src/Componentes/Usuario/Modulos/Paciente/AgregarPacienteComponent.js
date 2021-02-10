import React from 'react';
import UsuarioService from '../../../../Servicios/UsuarioService';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select"
import CheckButton from "react-validation/build/button";
import { isEmail, isNumeric} from 'validator';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';
import Swal from 'sweetalert2';

  const required = value => {
    if (value.length===0) {
      return (
        <div className="alert-validate" data-validate="Este campo es requerido" style={{width:"100%"}}/>
      );
    }
  };
  const email = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert-validate" data-validate="El formato del email no es valido" style={{width:"100%"}}/>
      );
    }
  };
  const telefono = value =>{
    if (!isNumeric(value)) {
      return (
        <div className="alert-validate" data-validate="El telefono debe solo contener numeros" style={{width:"100%"}}/>
      );
    }
    else if(value<100000000){
      return (
      <div className="alert-validate" data-validate="El numero de teléfono no debe tener menos 9 digitos" style={{width:"100%"}}/>
      );
    }
    else if(value>1000000000){
      return (
      <div className="alert-validate" data-validate="El numero de teléfono no debe tener mas de 9 digitos" style={{width:"100%"}}/>
      );
    }
    else if(value<900000000){
      return (
      <div className="alert-validate" data-validate="El numero de teléfono debe iniciar con el numero 9" style={{width:"100%"}}/>
      );
    }
  }
  const apellido = value=>{
    if (value.length<3){
      return (
        <div className="alert-validate" data-validate="El apellido debe tener mínimo 3 letras" style={{width:"100%"}}/>
        );
    }
  }
  const nombre = value=>{
    if (value.length<3){
      return (
        <div className="alert-validate" data-validate="El nombre debe tener mínimo 3 letras" style={{width:"100%"}}/>
        );
    }
  }
  const dni = value=>{
    if (!isNumeric(value)) {
      return (
        <div className="alert-validate" data-validate="El dni debe solo contener numeros" style={{width:"100%"}}/>
      );
    }
    else if (value.length!==8){
      return (
        <div className="alert-validate" data-validate="El dni debe tener 8 digitos" style={{width:"100%"}}/>
        );
    }
  }

class AgregarPacienteComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            fechaNac: '',
            email: '',
            direccion: '',
            telefono: '',
            genero: '',
            dni: '',

            tratamientoMedico: '',
            alergias: '',
            presionArterial: '',
            problemasCardiacos: '',
            diabetes: '',
            sangrado: '',
            fuma: '',

            loading: false,
            message: '',
            isFocus: false,
            tratamientoMedicoB: 'no',
            alergiasB: 'no',
            presionB: 'normal',
            problemasB: 'no',
            diabetesB: 'no',
            sangradoB: 'no',
            fumaB: 'no',
        }
        this.ChangeNombreHandler = this.ChangeNombreHandler.bind(this);
        this.ChangeApellidoHandler = this.ChangeApellidoHandler.bind(this);
        this.ChangeFechaNacHandler = this.ChangeFechaNacHandler.bind(this);
        this.ChangeEmailHandler = this.ChangeEmailHandler.bind(this);
        this.ChangeDireccionHandler = this.ChangeDireccionHandler.bind(this);
        this.ChangeTelefonoHandler = this.ChangeTelefonoHandler.bind(this);
        this.ChangeGeneroHandler = this.ChangeGeneroHandler.bind(this);
        this.ChangeDniHandler = this.ChangeDniHandler.bind(this);
        this.ChangeTratamientoMedicoHandler = this.ChangeTratamientoMedicoHandler.bind(this);

        this.ChangeOnTHandler = this.ChangeOnTHandler.bind(this);
        this.ChangeOffTHandler = this.ChangeOffTHandler.bind(this);
        this.ChangeOnAHandler = this.ChangeOnAHandler.bind(this);
        this.ChangeOffAHandler = this.ChangeOffAHandler.bind(this);
        this.ChangeOnPHandler = this.ChangeOnPHandler.bind(this);
        this.ChangeOffPHandler = this.ChangeOffPHandler.bind(this);
        this.ChangeOnDHandler = this.ChangeOnDHandler.bind(this);
        this.ChangeOffDHandler = this.ChangeOffDHandler.bind(this);
        this.ChangeOnSHandler = this.ChangeOnSHandler.bind(this);
        this.ChangeOffSHandler = this.ChangeOffSHandler.bind(this);
        this.ChangeOnFHandler = this.ChangeOnFHandler.bind(this);
        this.ChangeOffFHandler = this.ChangeOffFHandler.bind(this);

        this.ChangeBajaPHandler = this.ChangeBajaPHandler.bind(this);
        this.ChangeNormalPHandler = this.ChangeNormalPHandler.bind(this);
        this.ChangeAltaPHandler = this.ChangeAltaPHandler.bind(this);

        this.saveUsuario = this.saveUsuario.bind(this);
        this.cancel = this.cancel.bind(this);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onBlur	 = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }

    componentDidMount() {
      if (localStorage.getItem("isLandingPage")) {
          localStorage.removeItem("isLandingPage");
          window.location.reload();
      }
  }

    saveUsuario(e){
        e.preventDefault();
        this.setState({
            message: "",
            loading: true,
          });
          this.form.validateAll();
          if (this.checkBtn.context._errors.length === 0){
            UsuarioService.registrar_paciente(this.state.nombre, this.state.apellido, this.state.email, this.state.fechaNac, 
              this.state.direccion, this.state.telefono, this.state.genero,this.state.dni)
            .then(() => {
              this.props.history.push('/pacientes')
              window.location.reload();
            },
            error => {
              if(error.response.status === 401){
                this.setState({
                  loading: false
                });
                Swal.fire
                ({title: "Personal No autorizado",
                icon: 'error',
                backdrop: 'rgba(61, 0, 0, 0.4)'})
              }
              else{
              const resMessage =
              (error.response && error.response.data) || error.message 
              || error.toString();
              this.setState({
                loading: false,
                message: resMessage
              });
              Swal.fire
              ({title: resMessage,
                icon: 'error',
                backdrop: 'rgba(61, 0, 0, 0.4)'})
            }})
            .catch(function(error){
              this.setState({
                loading: false,
              });
              Swal.fire
              ({title: "Error de Conexión con el Servidor",
                icon: 'error',
                backdrop: 'rgba(61, 0, 0, 0.4)'})
            }.bind(this))
          }else {
            this.setState({
              loading: false
            });
        }
    }
    ChangeNombreHandler= (event) => {
      this.setState({nombre: event.target.value})
    }
    ChangeApellidoHandler= (event) => {
      this.setState({apellido: event.target.value})
    }
    ChangeFechaNacHandler= (event) => {
      this.setState({fechaNac: event.target.value})
    }
    ChangeEmailHandler= (event) => {
      this.setState({email: event.target.value})
    }
    ChangeDireccionHandler= (event) => {
      this.setState({direccion: event.target.value})
    }
    ChangeTelefonoHandler= (event) => {
      this.setState({telefono: event.target.value})
    }
    ChangeGeneroHandler= (event) => {
      this.setState({genero: event.target.value})
    }
    ChangeDniHandler= (event) => {
      this.setState({dni: event.target.value})
    }


    ChangeTratamientoMedicoHandler= (event) => {
      this.setState({tratamientoMedico: event.target.value})
    }
    ChangeAlergiasHandler= (event) => {
      this.setState({alergias: event.target.value})
    }
    ChangePresionArterialHandler= (event) => {
      this.setState({presionArterial: event.target.value})
    }
    ChangeProblemasCardiacosHandler= (event) => {
      this.setState({problemasCardiacos: event.target.value})
    }
    ChangeDiabetesHandler= (event) => {
      this.setState({diabetes: event.target.value})
    }
    ChangeSangradoHandler= (event) => {
      this.setState({sangrado: event.target.value})
    }
    ChangeFumaHandler= (event) => {
      this.setState({fuma: event.target.value})
    }

    ChangeOnTHandler= () => {
      this.setState({tratamientoMedicoB: "si"})
    }
    ChangeOffTHandler= () => {
      this.setState({tratamientoMedicoB: "no"})
    }
    ChangeOnAHandler= () => {
      this.setState({alergiasB: "si"})
    }
    ChangeOffAHandler= () => {
      this.setState({alergiasB: "no"})
    }
    ChangeBajaPHandler= () => {
      this.setState({presionB: "baja"})
    }
    ChangeNormalPHandler= () => {
      this.setState({presionB: "normal"})
    }
    ChangeAltaPHandler= () => {
      this.setState({presionB: "alta"})
    }
    ChangeOnPHandler= () => {
      this.setState({problemasB: "si"})
    }
    ChangeOffPHandler= () => {
      this.setState({problemasB: "no"})
    }
    ChangeOnDHandler= () => {
      this.setState({diabetesB: "si"})
    }
    ChangeOffDHandler= () => {
      this.setState({diabetesB: "no"})
    }
    ChangeOnSHandler= () => {
      this.setState({sangradoB: "si"})
      this.setState({sangrado: "si"})
    }
    ChangeOffSHandler= () => {
      this.setState({sangradoB: "no"})
      this.setState({sangrado: "no"})
    }
    ChangeOnFHandler= () => {
      this.setState({fumaB: "si"})
      this.setState({fuma: "si"})
    }
    ChangeOffFHandler= () => {
      this.setState({fumaB: "no"})
      this.setState({fuma: "no"})
    }

    cancel(){
        this.props.history.push('/pacientes')
    }

    
    onBlur(e) {
      /* eslint-disable */
      this.state.isFocus=false;
      e.currentTarget.type = "text";
    }
    onFocus(e) {
      /* eslint-disable */
      this.state.isFocus=true;
      e.currentTarget.type = "month";
    }
    onMouseEnter (e){
      e.currentTarget.type = "month";
    }
    onMouseOut (e){
      if(this.state.isFocus===false){
        e.currentTarget.type = "text";
      }
    }
    render (){
      localStorage.setItem("paciente",true);
        return(
                <div className="wrapper">
                    <HeaderComponent />
                    <Sidebar />
                    <div className="content-wrapper" style={{background:"white"}}>
                        <div className="container-modulos">
                            <div className="wrap-register200" style={{width:''}}>
                              <span className="login100-form-title">Registrar Paciente</span>
                                <Form className="register100-form validate-form" style={{display:"contents"}} onSubmit={this.saveUsuario} ref={c => {this.form = c;}}>
                                  <div className="container container-register">
                                      <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio" type="text" placeholder="Nombres" value={this.state.nombre} 
                                          onChange={this.ChangeNombreHandler} validations={[required,nombre]}/>
                                          <span className="symbol-input100">
                                            <i className="fa fa-N" aria-hidden="true"></i>
                                          </span>
                                      </div>

                                      <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio" type="text" placeholder="Apellidos" value={this.state.apellido} 
                                          onChange={this.ChangeApellidoHandler} validations={[required,apellido]}/>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                            <i className="fa fa-A" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="container container-register">
                                      <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio textbox-n" type="text" placeholder="Fecha de Nacimiento"
                                          value={this.state.fechaNac} onChange={this.ChangeFechaNacHandler} validations={[required]}
                                          onFocus={this.onFocus} onBlur={this.onBlur} onMouseEnter={this.onMouseEnter} onMouseOut={this.onMouseOut}/>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-calendar" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                      <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio" type="text" placeholder="Email" value={this.state.email} 
                                          onChange={this.ChangeEmailHandler} validations={[required,email]}/>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-envelope" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="container container-register">
                                    <div className="wrap-input100 validate-input">
                                          <Select value={this.state.genero} onChange={this.ChangeGeneroHandler} className="input100-julio" style={{border:"none"}} validations={[required]}>
                                            <option selected hidden style={{color:"red"}} value="null">Eliga el Género</option>
                                            <option value="M">Masculino</option>
                                            <option value="F">Femenino</option>
                                          </Select>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-transgender" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                      <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio" type="text" name="email" placeholder="Teléfono"  value={this.state.telefono} 
                                          onChange={this.ChangeTelefonoHandler} validations={[required,telefono]}/>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-phone" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="container container-register">
                                    <div className="wrap-input100 validate-input">
                                            <Input className="input100-julio" type="text" name="pass" placeholder="Dirección" value={this.state.direccion} 
                                            onChange={this.ChangeDireccionHandler} validations={[required]}/>
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <i className="fa fa-home" aria-hidden="true"></i>
                                            </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                            <Input className="input100-julio" type="text" name="pass" placeholder="DNI" value={this.state.dni} 
                                            onChange={this.ChangeDniHandler} validations={[required,dni]}/>
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <i className="fas fa-id-card" aria-hidden="true"></i>
                                            </span>
                                    </div>
                                  </div>
                                  <div className="container container-register">
                                    <a type="button" class="collapseBtn btn btn-secondary login100-form-title border-color-an" data-toggle="collapse" href="#collapseInputs" role="button" 
                                    aria-expanded="false" style={{marginTop:"3%", background:"none", color:"black",borderColor:"white",fontSize:"24px"}}>Antecedentes</a>
                                  </div>
                                  
                                  {/* collapse or collapse show*/}
                                  <div className="collapse" id="collapseInputs" style={{width:"-webkit-fill-available",marginTop:"1%"}}>
                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Se encuentra en tratamiento medico?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio" id="opt1" onChange={this.ChangeOnTHandler} checked={this.state.tratamientoMedicoB==="si"}/>
                                      <label for="opt1" className="label1" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio" id="opt2" onChange={this.ChangeOffTHandler} checked={this.state.tratamientoMedicoB==="no"}/>
                                      <label for="opt2" className="label2" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>
                                    {(this.state.tratamientoMedicoB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio" type="text" placeholder="¿Tiene o ha tenido?" value={this.state.tratamientoMedico} 
                                          onChange={this.ChangeTratamientoMedicoHandler}/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-hand-holding-medical" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Tiene Alergias?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio2" id="opt3" onChange={this.ChangeOnAHandler} checked={this.state.alergiasB==="si"}/>
                                      <label for="opt3" className="label1" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio2" id="opt4" onChange={this.ChangeOffAHandler} checked={this.state.alergiasB==="no"}/>
                                      <label for="opt4" className="label2" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>
                                    {(this.state.alergiasB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio" type="text" placeholder="Especifique" value={this.state.alergias} 
                                          onChange={this.ChangeAlergiasHandler}/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-head-side-cough" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>Presión Arterial</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio3" id="opt5" onChange={this.ChangeBajaPHandler} checked={this.state.presionB==="baja"}/>
                                      <label for="opt5" className="label-1" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">BAJA</span>
                                      </label>

                                      <input type="radio" name="radio3" id="opt6" onChange={this.ChangeNormalPHandler} checked={this.state.presionB==="normal"}/>
                                      <label for="opt6" className="label-2" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">NORMAL</span>
                                      </label>

                                      <input type="radio" name="radio3" id="opt7" onChange={this.ChangeAltaPHandler} checked={this.state.presionB==="alta"}/>
                                      <label for="opt7" className="label-3" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">ALTA</span>
                                      </label>
                                    </div>


                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Tiene Problemas Cardíacos?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio4" id="opt8" onChange={this.ChangeOnPHandler} checked={this.state.problemasB==="si"}/>
                                      <label for="opt8" className="label1" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio4" id="opt9" onChange={this.ChangeOffPHandler} checked={this.state.problemasB==="no"}/>
                                      <label for="opt9" className="label2" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>
                                    {(this.state.problemasB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio" type="text" placeholder="Especifique" value={this.state.problemasCardiacos} 
                                          onChange={this.ChangeProblemasCardiacosHandler}/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-heartbeat" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Tiene Diabetes?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio5" id="opt10" onChange={this.ChangeOnDHandler} checked={this.state.diabetesB==="si"}/>
                                      <label for="opt10" className="label1" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio5" id="opt11" onChange={this.ChangeOffDHandler} checked={this.state.diabetesB==="no"}/>
                                      <label for="opt11" className="label2" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>
                                    {(this.state.diabetesB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <Input className="input100-julio" type="text" placeholder="Especifique" value={this.state.diabetes} 
                                          onChange={this.ChangeDiabetesHandler}/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-syringe" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>Sangrado Excesivo por Heridas o Exodoncias</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio6" id="opt12" onChange={this.ChangeOnSHandler} checked={this.state.sangradoB==="si"}/>
                                      <label for="opt12" className="label1" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio6" id="opt13" onChange={this.ChangeOffSHandler} checked={this.state.sangradoB==="no"}/>
                                      <label for="opt13" className="label2" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Fuma?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio7" id="opt14" onChange={this.ChangeOnFHandler} checked={this.state.fumaB==="si"}/>
                                      <label for="opt14" className="label1" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio7" id="opt15" onChange={this.ChangeOffFHandler} checked={this.state.fumaB==="no"}/>
                                      <label for="opt15" className="label2" style={{cursor:"pointer",textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>

                                  </div>
                                    
                                  <div className="container-login100-form-btn">
                                      <button className="registrar100-form-btn" onClick={this.saveUsuario} style={{maxWidth:"1140px"}}
                                      ref={c => {this.checkBtn = c;}} disabled={this.state.loading}>{this.state.loading && (
                                      <span className="spinner-border spinner-border-sm"></span>)}<b>Registrar</b></button>
                                      <CheckButton style={{ display: "none" }} ref={c => {this.checkBtn = c;}}/>
                                      <button className="volver100-form-btn" onClick={this.cancel} style={{maxWidth:"1140px"}}><b>Volver</b></button>
                                  </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
        )}
}
export default AgregarPacienteComponent