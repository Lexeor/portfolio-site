import React from 'react';

function NavMenuItem(props) {
    return (
        <li><a href={`#${props.path}`}>{props.name}</a></li>
    )
}

export default NavMenuItem