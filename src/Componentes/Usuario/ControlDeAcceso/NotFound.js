import React from 'react';
import './NotFoundTheme/style.css';

class NotFound extends React.Component {
    render() {
        return (
            <div id="notfound">
                <div className="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>¡Ups! ¿Te perdiste?</h2>
                    <p>La página que estás buscando no está disponible.</p>
                    {/* eslint-disable */}
                    <a href="#">Homepage</a>
                    <div className="notfound-social">
                        <a><i className="fab fa-facebook-f"></i></a>
                        <a><i className="fab fa-twitter"></i></a>
                        <a><i className="fab fa-pinterest"></i></a>
                        <a><i className="fab fa-google-plus"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NotFound