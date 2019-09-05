import React from 'react'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';

const Nav = () => {
    const menu = () => {
        return [
            {name: 'Portada', href:'/'},
            {name: 'Balam', href:'/balam'},
            {name: 'Servicios', href:'/servicios'},
            {name: 'Productos', href:'/productos'},    
            {name: 'Contacto', href:'/contacto'}
        ]
    }
    return (
        <div>
           <CommandBar
                items={menu()}
            />
        </div>
    )
}

export default Nav
