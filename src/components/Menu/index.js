import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';


function Menu(){
    return (
    <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="VirginiaFlix logo"/>
        </a>

        <ButtonLink className="ButtonLink" href="/">
            Novo vídeo
        </ButtonLink>

    </nav>
    );
}

export default Menu;