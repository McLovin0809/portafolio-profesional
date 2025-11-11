import React from "react";
import { motion } from "framer-motion";
import LinkAtom from "../atoms/linkAtom";
import "../../style/organisms/NavBar.css";
import { navVariants, itemVariants } from "../../animations/navbarAnimation";

function NavBar(){
    return(
        <header>
            <motion.nav
                className="navbar"
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                <ul>
                    <motion.li variants={itemVariants}>
                        <LinkAtom href='#'>Sobre mi</LinkAtom>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <LinkAtom href='#'>Mis Proyectos</LinkAtom>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                        <LinkAtom href='#'>Sobre mi</LinkAtom>
                    </motion.li>
                </ul>
            </motion.nav>
        </header>
    );
}
export default NavBar;
