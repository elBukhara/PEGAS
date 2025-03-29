
const Carousel = () => {
    return (
        <section className="" id="carousel-container">

            <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    {/* First Slide */}
                    <div className="carousel-item c-item active">
                        <img src="assets/images/cover.jpg" 
                        className="d-block w-100 c-img c-img-first" alt="..."/>
                        <div className="carousel-caption top-0 mt-3 d-md-block">
                            <div className="row">
                                <div className="col-md-6 caption">
                                    
                                <div className="mt-5">
                                    <h1 className="display-3 fw-bold text-light text-start pb-3 text-shadow">Надежная аренда машин в Бухаре</h1>
                                    <p className="lead text-light text-start">Арендуйте новое авто за несколько минут и наслаждайтесь поездкой без забот!</p>
                                    <div className="text-start">
                                        <a href="#cars" className="btn btn-secondary btn-lg px-4 shadow">Начать сейчас!</a>
                                    </div>
                                </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item c-item">
                        <img src="assets/images/cover3.jpeg" 
                        className="d-block w-100 c-img c-img-second" alt="..."/>
                        <div className="carousel-caption top-0 mt-3 d-md-block">
                            <div className="row">
                                <div className="col-md-6">

                                </div>
                                <div className="col-md-6 caption">
                                    <div className="mt-2">
                                        <h2 className="display-3 fw-bold text-light text-end pb-3 text-shadow">Удобство и свобода передвижения</h2>
                                        <p className="lead text-light text-end">Идеальное решение для городских поездок и путешествий по региону.</p>
                                        <div className="text-end">
                                            <a href="#cars" className="btn btn-secondary btn-lg px-4 shadow">Забронировать авто</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Carousel;