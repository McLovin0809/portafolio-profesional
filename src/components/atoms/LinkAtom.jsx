import React from "react";
import '../../style/atoms/LinkAtom.css';

const LinkAtom = ({ href, children, className = ''}) => {
    return (
        <a href={href} className={`link-atom ${className}`}>
            {children}
        </a>
    );
};

export default LinkAtom;