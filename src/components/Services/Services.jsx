import React from "react";
import './Services.css';

function Services(){
    return(
        <div className="services-container container my-3">

            <div className="d-flex justify-content-between">
                <h2 className="section-title">Our Services</h2>
                <a href="#!">View all</a>
            </div>

            <div className="services">
                
                <div className="services-item d-flex flex-column gap-3">
                    <img className="img" src="/images/passport.png" />
                    <h5>Visa</h5>
                    <p>
                        Your holidays in the best thermal
                        SPA resorts of Italy, France,
                        Switzerland, Hungary, Slovenia
                        and others
                    </p>
                </div>

                <div className="services-item d-flex flex-column gap-3">
                    <img className="img" src="/images/concierge.png" />
                    <h5>Concierge</h5>
                    <p>
                        Complex booking of the hotels
                        with non-standard 
                        accommodation in the villas,
                        suites, apartments, etc
                    </p>
                </div>

                <div className="services-item d-flex flex-column gap-3">
                    <img className="img" src="/images/car.png" />
                    <h5>Transfer</h5>
                    <p>
                        Over 400 pages of practical
                        digital marketing advice with
                        downloadable worksheets and video guides
                    </p>
                </div>

                <div className="services-item d-flex flex-column gap-3">
                    <img className="img" src="/images/insurance.png" />
                    <h5>Insurance</h5>
                    <p>
                        Your holidays in the best thermal
                        SPA resorts of Italy, France,
                        Switzerland, Hungary, Slovenia
                        and others
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Services;