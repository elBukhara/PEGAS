import ContactForm from "../components/ContactForm"
import HeroSection from "../components/HeroSection"
import Cars from "../components/Cars"

import "../styles/index.css"
import "../styles/carousel.css"
import "../styles/parallax.css"
import "../styles/sky.css"

function Main() {

    return (
        <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark-mine">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">PEGAS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item"><a className="nav-link fw-bold fs-6" href="#about">О нас</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold fs-6" href="#cars">Автопарк</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold fs-6" href="#contact">Контакты</a></li>
                        <li className="nav-item"><a className="nav-link fw-bold fs-6" href="#location">Локация</a></li>
                        
                    </ul>
                </div>
            </div>
        </nav>

        {/* Hero Section */}
        <HeroSection />

        {/* About */}
        <main className="container my-5" id="about">
            <h2 className="display-5 text-center fw-bold">О Нас</h2>

            <div className="row">
            <div className="col-xl-6 order-xl-last text-center px-2">
                <img className="my-auto mx-auto img-fluid" src="assets/cars/malibu3.jpg" alt=""/>
            </div>

            <div className="col-xl-6 order-xl-first">
                <div className="p-5">
                    <h3 className="text-start fs-3 fw-bold text-uppercase">Ваш доверенный автопарк</h3>
                    <p className="fs-4">
                        Мы предлагаем широкий выбор <strong>новых</strong> автомобилей для аренды в Бухаре. 
                        Наша компания известна своей ответственностью и вниманием к клиентам. 
                        Мы предлагаем профессиональную поддержку и сервис, индивидуальный подход к каждому клиенту, <strong>четкие цены</strong> и прозрачные условия c гарантией. 
                        Выбирайте новый автомобиль у нас и наслаждайтесь комфортным путешествием по Бухаре!
                    </p>
                </div>
            </div>


        </div>

        </main>

        {/* Parallax */}
        <section className="container my-5" id="parallax-section">
            <div className="parallax d-flex justify-content-center">
                <div className="parallax-text p-5">
                    <h2 className="display-5 text-center fw-bold text-uppercase mb-2">Лучший сервис</h2>
                
                    <p className="my-3">Добро пожаловать в Pegas Car Rental — вашего надежного партнера в сфере проката автомобилей в Узбекистане. Наша история началась в 2018 году.</p>
                    <a type="button" className="btn btn-lg btn-secondary" href="#cars">Забронировать</a>
                                
                </div>
            </div>
        </section>

        {/* Cars */}
        <Cars />

        {/* Sky */}
        <section id="sky-section" className="d-flex flex-column justify-content-center align-items-center">
            <div className="text-container">
                <p className="display-4 fw-bold">Невероятный</p>
                <p className="display-4 fw-bold text-warning">комфорт</p>
            </div>
            <div className="car-container">
                <img src="assets/cars/malibu-under-sky.png" className="car-image img-fluid" alt="Car under the sky"/>
            </div>
        </section>

        {/* Advantages */}
        <section id="advantages" className="pb-5">
            <div className="py-5">
                <h2 className="display-5 text-uppercase text-center fw-bold text-white">
                    Почему выбирают <span className="text-warning">нас</span>?
                </h2>
            </div>

            <div className="container">
                <div className="row align-items-center row-gap-3">
                    {/* Image Section */}
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img src="assets/images/car-interier.png" alt="Car Interior" className="img-fluid rounded"/>
                    </div>

                    {/* Advantages Section */}
                    <div className="col-12 col-md-6">
                        <div className="row g-4">
                            {/* Advantage 1 */}
                            <div className="col-12 col-sm-6 text-center">
                                <img src="assets/icons/document.png" alt="Document Icon" className="img-fluid mb-3 icon"/>
                                <h3 className="fw-bold text-white">Cтрахование</h3>
                                <p className="text-white">Все автомобили оборудованы полной страховкой</p>
                            </div>

                            {/* Advantage 2 */}
                            <div className="col-12 col-sm-6 text-center">
                                <img src="assets/icons/rush.png" alt="Clock Icon" className="img-fluid mb-3 icon"/>
                                <h3 className="fw-bold text-white">Скорость</h3>
                                <p className="text-white">Мы не заставим вас долго ждать</p>
                            </div>

                            {/* Advantage 3 */}
                            <div className="col-12 col-sm-6 text-center">
                                <img src="assets/icons/pricing.png" alt="Pricing Icon" className="img-fluid mb-3 icon"/>
                                <h3 className="fw-bold text-white">Доступность</h3>
                                <p className="text-white">Вы можете арендовать машину по выгодным условиям</p>
                            </div>

                            {/* Advantage 4 */}
                            <div className="col-12 col-sm-6 text-center">
                                <img src="assets/icons/gasoline-pump.png" alt="Driver Icon" className="img-fluid mb-3 icon"/>
                                <h3 className="fw-bold text-white">Готовность</h3>
                                <p className="text-white ">Автомобиль выдается с полным баком бензина</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* FAQ */}
        <section id="accordion" className="container py-5 my-5">
            <h2 className="lead text-center display-6 text-uppercase text-center fw-bold">Часто задаваемые вопросы</h2>
                <div className="accordion accordion-flush" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Все ли ваши автомобили новые?
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Да, все наши автомобили абсолютно новые и поступают напрямую из салона. В отличие от многих поставщиков услуг, которые используют подержанные автомобили, мы гарантируем идеальное техническое состояние и максимальный комфорт для наших клиентов.
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Какие документы нужны для аренды?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Для аренды автомобиля вам понадобятся паспорт, водительское удостоверение и банковская карта для оплаты.                  
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Могу ли я арендовать без залога?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    В большинстве случаев требуется залог, который возвращается после завершения аренды. Однако у нас есть специальные тарифы, которые позволяют арендовать автомобиль без залога.
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Что делать в случае поломки?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Если автомобиль вышел из строя, свяжитесь с нашей службой поддержки по телефону, указанному в договоре аренды. Мы организуем замену автомобиля или предоставим помощь на месте.
                    </div>
                </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Можно ли забронировать заранее?
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Да, вы можете забронировать автомобиль на нужные вам даты через наш сайт или позвонив в службу поддержки. Рекомендуем бронировать заранее, чтобы гарантировать доступность выбранной модели.
                    </div>
                    </div>
                </div>

            </div>
        </section>

        {/* Location */}
        <section id="location" className="container py-5 my-5">
            <h2 className="lead text-center display-6 text-uppercase text-center fw-bold mb-4">Локация</h2>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1533.109569009746!2d64.43884447113182!3d39.7796372974853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f50056e7e8f7137%3A0xf9401507df9214f5!2sLuxury%20Rent%20a%20Car!5e0!3m2!1sru!2s!4v1735312289183!5m2!1sru!2s" width="100%" height="450" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>

        {/* Modal */}
        <div className="modal fade" id="bookingModal" tabIndex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-bottom-0 p-5 pb-4">
                <p className="modal-title fw-bold fs-3" id="bookingModalLabel">Бронирование успешно!</p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>Спасибо за бронирование! Для быстрого ответа рекомендуем связаться:</p>
                <div className="row">
                <div className="col-6 text-center">
                    <a href="https://t.me/anvar_rentacar" className="telegram-link me-3 btn btn-outline-primary"><i className="bi bi-telegram me-2"></i>Telegram</a>
                </div>
                <div className="col-6 text-center">
                    <a href="tel:+998973038228" className="phone-link btn btn-outline-success"><i className="bi bi-phone me-2"></i>По телефону</a>
                </div>
                </div>
                
            </div>
            <div className="modal-footer border-top-0 p-4 pt-5">
            </div>
            </div>
        </div>
        </div>

        {/* Footer */}
        <div className="container" id="footer">
        <footer className="d-flex flex-wrap justify-content-between py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">RentCar Bukhara</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" href="tel:+998973038228">+998973038228</a></li>
            <li className="ms-3"><a className="text-body-secondary" href="https://t.me/anvar_rentacar"><svg className="bi" width="24" height="24"><use xlinkHref="#telegram"></use></svg></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/pegas_rentcars?igsh=MTZ5b2o2OXJkYWx1dQ=="><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
            </ul>
        </footer>
        </div>

        {/* SVG  ICONS */}
        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="bootstrap" viewBox="0 0 118 94">
            <title>Bootstrap</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
        </symbol>
        <symbol id="telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>        
        </symbol>
        <symbol id="instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </symbol>
        <symbol id="twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </symbol>
        </svg>

        </>
    )
}

export default Main