import React from 'react';
import useHover from '../hooks/useHover';

function SocialItem(props) {
    const [hovered, ref] = useHover();

    return (
        <a title={props.item.name} href={props.item.url} className={hovered ? 'icon-hovered' : ''} ref={ref} target="_blank" rel="noreferrer">
            <i className={props.item.icon}></i>
        </a>
    )
}

export default SocialItem