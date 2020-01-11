import React from "react";
import "./About.css"

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "You can never replace anyone because everyone is made up of such beautiful specific details."
            </span>
            <span>- Before Sunset, 2004</span>
        </div>
    );
}

export default About;