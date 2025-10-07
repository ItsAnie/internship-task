import React from "react";
import './CovidInfo.css'

function CovidInfo(){
    return(
        <div className="covid-wrapper d-flex align-items-center justify-content-center">
            <div className="covid-container d-flex align-items-center gap-3">
                <img src="/images/info.png" alt="Warning icon" className="warn-icon" />
                <div className="covid-info">
                    <span className="covid-text">
                        <b>COVID info.</b>Rules you should know before trip. 
                        <a href="https://www.gov.am/en/covid-travel-restrictions/" target="blank" className="covid-link">Learn more</a>
                        
                    </span>
                    
                </div>
            </div>
        </div>
    );
}

export default CovidInfo;