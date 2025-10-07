import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./DealImages.css";

function DealImages() {

  const itemsData = [
                      { slides: ['/images/slide1.png', '/images/slide1.png', '/images/slide1.png'], title: 'Canary Wharf Studios', location: 'Tower Hamlets, London', value: 'US$ 166'},
                      { slides: ['/images/slide2.png', '/images/slide2.png', '/images/slide2.png'], title: 'Canary Wharf Studios', location: 'Tower Hamlets, London', value: 'US$ 166'},
                      { slides: ['/images/slide3.png', '/images/slide3.png', '/images/slide3.png'], title: 'Bell House Hostel', location: 'Westminster Borough, London', value: 'US$ 101'},
                      { slides: ['/images/slide4.png', '/images/slide4.png', '/images/slide4.png'], title: 'The Other House - South...', location: 'Kensington and Chelsea, London', value: 'US$ 361'},
                      { slides: ['/images/slide5.png', '/images/slide5.png', '/images/slide5.png'], title: 'Leonardo Royal London St Paul', location: 'City of Londoin, London', value: 'US$ 285'},
                      { slides: ['/images/slide6.png', '/images/slide6.png', '/images/slide6.png'], title: 'Montcalm Royal London House -...', location: 'Islington, London', value: 'US$ 242'},
                      { slides: ['/images/slide7.png', '/images/slide7.png', '/images/slide7.png'], title: 'Radisson Blu Edwardian...', location: 'Camden, London', value: 'US$ 366'},
                      { slides: ['/images/slide8.png', '/images/slide8.png', '/images/slide8.png'], title: 'Radisson Blu Edwardian New...', location: 'Tower Hamlets, London', value: 'US$ 201'}
                  ];

  return (
    <div className="container">
      <div className="row g-4">
        {itemsData.map((item, index) => (
          <CarouselCard item={item} index={index} key={index} />

        ))}
      </div>
      </div>
  );
}

          function CarouselCard({item, index}){
            const [activeIndex, setActiveIndex] = useState(0);

            useEffect(() => {
              const carouselEl = document.getElementById(`carousel${index}`);

              if(carouselEl){
                const handleSlide = (e) =>{
                  setActiveIndex(e.to)
                };
                carouselEl.addEventListener("slid.bs.carousel", handleSlide);

                return () =>{
                  carouselEl.removeEventListener("slid.bs.carousel", handleSlide);
                };
              }
            }, [index]);

            return(
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            
                <div
                  id={`carousel${index}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000"
                >
                  
                  <ol className="carousel-indicators custom-indicators">
                    {item.slides.map((_, i) => (
                      <li
                        key={i}
                        className={i === activeIndex ? "active" : ""}
                        onClick={() => handleIndicatorClick(i)}
                      ></li>
                    ))}
                  </ol>

                  <div className="carousel-inner">
                    {item.slides.map((slide, i) => (
                      <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                        <img
                          className="img-fluid slider-img"
                          src={slide}
                          alt={`Slide ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>

                    {activeIndex !== 0 &&(
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel${index}`}
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon">
                          <img src="/images/prev.png" />
                        </span>
                      </button>
                    )}
                  
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel${index}`} 
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon">
                      <img src="/images/next.png" />
                    </span>
                  </button>
                </div>

                <div className="mt-2">
                  <h5 className="title">{item.title}</h5>
                  <p className="location">{item.location}</p>
                  <p>starting from <b className="value">{item.value}</b></p>
                </div>
              </div>
            )
          }

export default DealImages;
