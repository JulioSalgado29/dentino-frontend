import React from 'react';
import './NotFoundTheme/style.css';
import './NotFoundTheme/style.js';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }
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
                    <a href="#">Homepage</a>
                    <div class="notfound-social">
                        <a><i class="fa fa-facebook"></i></a>
                        <a><i class="fa fa-twitter"></i></a>
                        <a><i class="fa fa-pinterest"></i></a>
                        <a><i class="fa fa-google-plus"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NotFound