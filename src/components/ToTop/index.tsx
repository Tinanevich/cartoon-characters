import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

import './styles.scss';

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 4) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className="toTop"
            style={{display: isVisible ? 'block':'none'}}
            onClick={goTop}>
            <FaArrowCircleUp/>
        </button>
    );
}

export default ToTop;