import React from 'react';
import './NotFoundTheme/style.css';

class NotFound extends React.Component {
    render() {
        return (
            <div id="notfound">
                <div class="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>¡Ups! ¿Te perdiste?</h2>
                    <p>La página que estás buscando no está disponible.</p>
                    {/* eslint-disable */}
                    <a href="#">Homepage</a>
                    <div class="notfound-social">
                        <a><i class="fab fa-facebook-f"></i></a>
                        <a><i class="fab fa-twitter"></i></a>
                        <a><i class="fab fa-pinterest"></i></a>
                        <a><i class="fab fa-google-plus"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NotFound