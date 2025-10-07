import React from "react";
import './Rules.css'

function Rules(){
    return(
        <div className="rules-container container d-flex justify-content-center align-items-center flex-column">
            <div className="rules d-flex flex-column align-items-center">
                <div className="rules-text d-flex align-items-center gap-3">
                    <h2 className="section-title">Guideline.</h2>
                    <p className="m-0">Rules you should khow before trip.</p>
                </div>

                <button className="explore_btn">Explore</button>
            </div>
            
        </div>
    );
}

export default Rules;