import React from 'react';

const Header = (props) =>
{
    return (
        <div className={props.className}>
            <h1 className="encabezadoGaleria">{props.titulo}</h1>
        </div>
    );
}

export default Header;
