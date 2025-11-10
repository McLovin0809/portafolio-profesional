import React from "react";
import LinkAtom from "../atoms/linkAtom";
import "../../style/organisms/NavBar.css"

function NavBar(){
    return(
        <header>
            <nav className="navbar">
                <ul>
                    <li><LinkAtom href='#'>Sobre mi</LinkAtom></li>
                    <li><LinkAtom href='#'>Mis Proyectos</LinkAtom></li>
                    <li><LinkAtom href='#'>Sobre mi</LinkAtom></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;