import React from "react";
import '../css/Skills.css'
export default function Skills(){
    return(
        <div className="skills">
            <p>Languages</p>
            <ul className="skillslist">
                <li>Python</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <p>Frameworks</p>
            <ul className="skillslist">
                <li>React</li>
                <li>SFML</li>
            </ul>
        </div>
    )
}