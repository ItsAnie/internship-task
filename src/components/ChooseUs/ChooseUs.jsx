import React from "react";
import './ChooseUS.css'

function ChooseUs(){
    return(
        <div className="choose-us-container container d-flex justify-content-between gap-3">
            
            <div  className="header d-flex flex-row position-relative">

                <div className="d-flex flex-column gap-3">
                    <h2 className="section-title">Why Ventourio?</h2>

                    <div className="reasons">
                        <h3>Expertise and Experience</h3>
                        <p>
                            Venturio OU is a licensed and experienced touristic operator
                            that specializes in providing a wide range of touristic service
                        </p>
                    </div>

                    <div className="reasons">
                        <h3>Convenience and Transparency</h3>
                        <p>
                            Ventourio OU offers a convenient and transparent booking process
                            for their customers, with a user-friendly online platform
                        </p>
                    </div>

                    <div className="reasons">
                        <h3>Customers support and Satisfaction</h3>
                        <p>
                            Ventourio OU values customer satifaction and provides excellent
                            customer support throughout the booking
                        </p>
                    </div>
                    
                </div>
                <div className="header-img-wrapper">
                    <img src="images/Group_42.png" alt="Decor" className="header-img" />
                </div>
                                    
            </div>

            <div className="stats d-flex flex-column justify-content-end gap-3">
                <img src="/images/holiday.png" className="stats_img" />
                <h3>11 000 trips</h3>
                <p>
                    Over 400 pages of practical digital marketing advice.
                </p>

                <img src="/images/backpacker.png" className="stats_img" />
                <h3>200 000 users</h3>
                <p>
                    Over 400 pages of practical digital marketing advice.
                </p>
            </div>
        </div>
    );
}

export default ChooseUs;