import React from "react";
import './Deals.css';

function Deals(){
    return(
        <div className="d-flex justify-content-center">
            <div className="container d-flex flex-column">
                <h2 className="section-title">Best Deals in</h2>
                <ul className="city-list d-lg-flex d-none fw-wrap">
                    <li>London</li>
                    <li>New York</li>
                    <li>Paris</li>
                    <li>Madrid</li>
                    <li>Barcelona</li>
                    <li>Kyiv</li>
                    <li>London</li>
                    <li>New York</li>
                    <li>Paris</li>
                    <li>Madrid</li>
                    <li>Barcelona</li>
                    <li>Kyiv</li>
                    <li>Barcelona</li>
                    <li>Kyiv</li>
                    <li>Barcelona</li>
                    <li>London</li>
                    <li>Kyiv</li>

                    <li className="arrow">
                        <img src="/images/arrow.png" />
                    </li>
                    
                    <li><a href="#!" className="view-all">View all</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Deals;