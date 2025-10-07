import React, { useState } from "react";
import './EastAsia.css';

function EastAsia() {
  const [showMore, setShowMore] = useState(false);

  const firstText = `East Asia is the largest part of a huge continent, on its territory there are 
                    many interesting countries (Japan, South and North Korea, China, Taiwan and many others). 
                    This part of the continent is located in temperate, subtropical and tropical climatic zones, so 
                    tourists are provided with a variety of rest.`;

  const secondText = `For fans of urban recreation open their doors hotels in Beijing, Shanghai, 
                    Hong Kong and other booming and growing cities, which provide their guests with the opportunity to 
                    plunge into the unforgettable world of local exoticism, get acquainted with cultural monuments, 
                    harmoniously surrounded by the most modern skyscrapers of glass and metal.`;

  const additionalText = `East Asia is the largest part of a huge continent, on its territory there are 
                        many interesting countries (Japan, South and North Korea, China, Taiwan and many others). 
                        This part of the continent is located in temperate, subtropical and tropical climatic zones, so 
                        tourists are provided with a variety of rest.`;

  return (
        <div className="eastasia-container container">
            <div className="east-asia">
                <h2 className="section-title mb-3">Features of vacation in East Asia</h2>
                <p>{firstText}</p>

                <p className={`gradient-text ${showMore ? "expanded" : ""}`}>
                    {secondText}
                    {showMore && additionalText}
                </p>

                <a
                    href="#!"
                    className="view-more-link"
                    onClick={(e) => {
                    e.preventDefault();
                    setShowMore(!showMore);
                    }}
                >
                    {showMore ? "View Less" : "View More"}
                </a>
            </div>
        </div>
  );
}

export default EastAsia;