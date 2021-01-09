import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import UsuarioService from './UsuarioService';

export const ProtetedRoute = ({component: Component, ...rest}) => {
    return(
        <Route 
            {...rest} 
            render={
            (props) => {
                if(UsuarioService.getCurrentUser()){
                    return <Component {...props}/>
                }
                else{
                    return <Redirect to={{pathname: "/", state:"{from: props location}"}}/>
                }
            }
        }/>
    )
}