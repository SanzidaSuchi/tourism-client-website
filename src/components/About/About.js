import React from 'react';
import Eiffle from "../../images/spot/efil.jpg"

const About = () => {
    return (
        <div>
                <div className="container d-flex mt-5">
                <div className="col-4">
                    <h2>About Obokash Travel Agency</h2>
                    <p>The community organizers have more than 10 years of work experience with the travel inventory and technology business. With our OTA service, a person could develop his/her career in the aviation trade and travel industries. Though our organizers are a few IATA  travel agents and obokashIT – Information Technology company, but our Online Travel Community,  “ObokashFamily” is a NON-Profitable B2B travel business module. Travel-Agents, Airlines, and Hotels are part of our online travel community. And our community umbrella is a shade of unity, technology, information, and services.</p>
                </div>
                <div className="col-8">
                <h3>Visa Processing Service</h3>
                <img  src={Eiffle} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;