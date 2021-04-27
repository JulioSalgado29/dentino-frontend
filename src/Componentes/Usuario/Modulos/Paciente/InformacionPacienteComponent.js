import React from 'react';
import HeaderComponent from '../../../Complementos/HeaderComponent';
import Sidebar from '../../../Complementos/SidebarComponent';
  function format(x, y) {
    var z = {
        M: x.getMonth() + 1,
        d: x.getDate() + 1,
        h: x.getHours(),
        m: x.getMinutes(),
        s: x.getSeconds()
    };
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
        return ((v.length > 1 ? "0" : "") + z[v.slice(-1)]).slice(-2)
    });

    return y.replace(/(y+)/g, function(v) {
        return x.getFullYear().toString().slice(-v.length)
    });
}

class InformacionPacienteComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: JSON.parse(localStorage.getItem("dato")).persona.id,
            nombre: JSON.parse(localStorage.getItem("dato")).persona.nombre,
            apellido: JSON.parse(localStorage.getItem("dato")).persona.apellido,
            fechaNac: format(new Date(JSON.parse(localStorage.getItem("dato")).persona.fechaNac),"yyyy-MM-dd"),
            email: JSON.parse(localStorage.getItem("dato")).persona.email,
            direccion: JSON.parse(localStorage.getItem("dato")).persona.direccion,
            telefono: String(JSON.parse(localStorage.getItem("dato")).persona.telefono),
            genero: JSON.parse(localStorage.getItem("dato")).persona.genero,
            dni: JSON.parse(localStorage.getItem("dato")).persona.dni,

            antecedenteId: JSON.parse(localStorage.getItem("dato")).antecedente.id,
            tratamientoMedico: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.tratamientoMedico).tratamientoMedico,
            alergias: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.alergias).alergias,
            problemasCardiacos: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.problemasCardiacos).problemasCardiacos,
            diabetes: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.diabetes).diabetes,
            fumaHC: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.fuma).fumaHC,
            fumaF: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.fuma).fumaF,

            tratamientoMedicoB: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.tratamientoMedico).tratamientoMedicoB,
            alergiasB: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.alergias).alergiasB,
            presionB: JSON.parse(localStorage.getItem("dato")).antecedente.presionArterial,
            problemasB: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.problemasCardiacos).problemasB,
            diabetesB: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.diabetes).diabetesB,
            sangradoB: JSON.parse(localStorage.getItem("dato")).antecedente.sangrado,
            fumaB: JSON.parse(JSON.parse(localStorage.getItem("dato")).antecedente.fuma).fumaB,

            loading: false,
            message: "",
            isFocus: false,
        }
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
      if (localStorage.getItem("isLandingPage")) {
          localStorage.removeItem("isLandingPage");
          window.location.reload();
      }
      if(this.state.telefono==="null"){
        this.setState({
          telefono: "",
        });
      }
    }
    cancel(){
        this.props.history.push('/pacientes')
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
                              <span className="login100-form-title">Informacion de Paciente</span>
                                <form className="register100-form validate-form" style={{display:"contents"}}>
                                  <div className="container container-register">

                                      <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="Nombres" value={this.state.nombre} disabled/>
                                          <span className="symbol-input100">
                                              <i className="fa fa-N" aria-hidden="true"></i>
                                          </span>
                                      </div>

                                      <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="Apellidos" value={this.state.apellido} disabled/>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-A" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="container container-register">
                                      <div className="wrap-input100 validate-input">
                                          <input className="input100-julio textbox-n" type="date" placeholder="Fecha de Nacimiento" value={this.state.fechaNac} disabled/>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-calendar" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                      <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="Email" value={this.state.email} disabled/>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-envelope" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="container container-register">
                                  <div className="wrap-input100 validate-input">
                                          <select value={this.state.genero} onChange={this.ChangeGeneroHandler} className="input100-julio" disabled>
                                            <option selected hidden value="M">Masculino</option>
                                            <option selected hidden value="F">Femenino</option>
                                          </select>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-transgender" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                      <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" name="email" placeholder="Teléfono"  value={this.state.telefono} disabled/>
                                          <span className="focus-input100"></span>
                                          <span className="symbol-input100">
                                              <i className="fa fa-phone" aria-hidden="true"></i>
                                          </span>
                                      </div>
                                  </div>
                                  <div className="container container-register">
                                    <div className="wrap-input100 validate-input">
                                            <input className="input100-julio" type="text" name="pass" placeholder="Dirección" value={this.state.direccion} disabled/>
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <i className="fa fa-home" aria-hidden="true"></i>
                                            </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                            <input className="input100-julio" type="text" name="pass" placeholder="DNI" value={this.state.dni} disabled/>
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
                                                <i className="fas fa-id-card" aria-hidden="true"></i>
                                            </span>
                                    </div>
                                  </div>
                                  <div className="container container-register">
                                    <a type="button" class="collapseBtn btn btn-secondary login100-form-title border-color-an" data-toggle="collapse" href="#collapseinputs" role="button" 
                                    aria-expanded="false" style={{marginTop:"3%", background:"none", color:"black",borderColor:"white",fontSize:"24px",cursor:"context-menu"}}>Antecedentes Médicos</a>
                                  </div>
                                  
                                  {/* collapse or collapse show*/}
                                  <div className="collapse show" style={{width:"-webkit-fill-available",marginTop:"1%"}}>
                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Se encuentra en tratamiento medico?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio" id="opt1" checked={this.state.tratamientoMedicoB==="si"} disabled/>
                                      <label for="opt1" className="label1" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio" id="opt2" checked={this.state.tratamientoMedicoB==="no"} disabled/>
                                      <label for="opt2" className="label2" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>
                                    {(this.state.tratamientoMedicoB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="¿Tiene o ha tenido?" value={this.state.tratamientoMedico} 
                                          disabled/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-hand-holding-medical" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Tiene Alergias?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio2" id="opt3" checked={this.state.alergiasB==="si"}/>
                                      <label for="opt3" className="label1" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio2" id="opt4" checked={this.state.alergiasB==="no"}/>
                                      <label for="opt4" className="label2" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>
                                    {(this.state.alergiasB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="Especifique" value={this.state.alergias}
                                          disabled/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-head-side-cough" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>Presión Arterial</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio3" id="opt5" checked={this.state.presionB==="baja"} disabled/>
                                      <label for="opt5" className="label-1" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">BAJA</span>
                                      </label>

                                      <input type="radio" name="radio3" id="opt6" checked={this.state.presionB==="normal"} disabled/>
                                      <label for="opt6" className="label-2" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">NORMAL</span>
                                      </label>

                                      <input type="radio" name="radio3" id="opt7" checked={this.state.presionB==="alta"} disabled/>
                                      <label for="opt7" className="label-3" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">ALTA</span>
                                      </label>
                                    </div>


                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Tiene Problemas Cardíacos?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio4" id="opt8" checked={this.state.problemasB==="si"} disabled/>
                                      <label for="opt8" className="label1" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio4" id="opt9" checked={this.state.problemasB==="no"} disabled/>
                                      <label for="opt9" className="label2" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>
                                    {(this.state.problemasB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="Especifique" value={this.state.problemasCardiacos} 
                                          disabled/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-heartbeat" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Tiene Diabetes?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio5" id="opt10" checked={this.state.diabetesB==="si"} disabled/>
                                      <label for="opt10" className="label1" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio5" id="opt11" checked={this.state.diabetesB==="no"} disabled/>
                                      <label for="opt11" className="label2" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>
                                    {(this.state.diabetesB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="Especifique" value={this.state.diabetes} 
                                          disabled/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-syringe" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>Sangrado Excesivo por Heridas o Exodoncias</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio6" id="opt12" checked={this.state.sangradoB===true} disabled/>
                                      <label for="opt12" className="label1" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio6" id="opt13" checked={this.state.sangradoB===false} disabled/>
                                      <label for="opt13" className="label2" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>

                                    <div className="wrap-input100 validate-input">
                                      <label style={{marginTop:"1%", textAlign:"center", fontSize:"20px",color:"lightseagreen"}}>¿Fuma?</label>
                                    </div>
                                    <div className="container container-yesorno wrap-input100 validate-input" style={{paddingRight:"0",paddingLeft:"0"}}>
                                      <input type="radio" name="radio7" id="opt14" checked={this.state.fumaB==="si"} disabled/>
                                      <label for="opt14" className="label1" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">SI</span>
                                      </label>

                                      <input type="radio" name="radio7" id="opt15" checked={this.state.fumaB==="no"} disabled/>
                                      <label for="opt15" className="label2" style={{textAlign:"-webkit-center"}}>
                                          <span className="span-class">NO</span>
                                      </label>
                                    </div>

                                    {(this.state.fumaB==="si" && 
                                      <div className="container container-register">
                                        <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="Hace Cuánto" value={this.state.fumaHC} 
                                          disabled/>
                                          <span className="symbol-input100">
                                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                        <div className="wrap-input100 validate-input">
                                          <input className="input100-julio" type="text" placeholder="Frecuencia" value={this.state.fumaF} 
                                          disabled/>
                                          <span className="symbol-input100">
                                            <i className="fas fa-smoking" aria-hidden="true"></i>
                                          </span>
                                        </div>
                                      </div>)}

                                  </div>
                                  <div className="container-login100-form-btn">
                                      <button className="volver100-form-btn" onClick={this.cancel} style={{maxWidth:"1140px"}}><b>Volver</b></button>
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )}
}
export default InformacionPacienteComponent