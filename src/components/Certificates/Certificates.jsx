import React from "react";
import './Certificates.css'

function Certificates(){
    return(
        <div className="certificates container">
            <div>
                <h2 className="section-title">Certificates and deals</h2>
                <p>info about best deals</p>
            </div>

            <div className="certificates-row d-flex gap-3">
                <div className="img_1">
                    <h3>Certificates</h3>
                    <p>There's always time for one.
                        Discover deals on stays between</p>
                    <button className="explore-btn">Explore</button>
                </div>

                <div className="img_2 m-0 p-0">
                   
                </div>
                
                <div className="img_3">
                    <h3>Hot deal</h3>
                    <p>There's always time for one.
                        Discover deals on stays between</p>
                    <button className="explore_deal">Explore deal</button></div>
            </div>
        </div> 
    );
}

export default Certificates