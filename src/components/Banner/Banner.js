import slider1 from "../Banner/Planeta.png";
import slider2 from "../Banner/novedades.jpg";

const Banner = () => {

    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="Planeta" />
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="Planeta"  />

                    </div>
                    <div className="carousel-item">
                        <img src={slider1} className="d-block w-100" alt="Planeta"  />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    )
}
export default Banner


