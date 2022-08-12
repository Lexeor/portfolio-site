import {useState, useEffect, useRef} from 'react';

function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    function handleMouseEnter() {
        setHovered(true);
    }

    function handleMouseLeave() {
        setHovered(false);
    }

    useEffect(() => {
        ref.current.addEventListener('mouseenter', handleMouseEnter);
        ref.current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            ref.current.removeEventListener('mouseenter', handleMouseEnter);
            ref.current.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, []);

    return [hovered, ref];
}

export default useHover;