import React, {useEffect, useState} from "react";

import "./CookieBanner.css";

const CookieBanner = ({showBanner, setShowCookieBanner}) => {

    const [visible, setVisible] = useState(showBanner);

    useEffect(() => {
        setVisible(showBanner);
        if(visible) {
            setTimeout(() => {
                setVisible(false);
                setShowCookieBanner(false);    
            }, 8000);    
        }
    }, [visible, setVisible, showBanner, setShowCookieBanner]);

    return (
    <div className="CookieBanner" style={{
        transform: `translateY(${visible ? 0 : 100}%)`
    }}>
        <p>You have opted out! It's like you were never here!!!</p>
        <p><span role="img" aria-label="three silly ghosts">👻👻👻</span></p>
    </div>  
    );
};

export default CookieBanner;
