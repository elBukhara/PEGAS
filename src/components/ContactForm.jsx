import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const backendUrl = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    // Check if form is valid whenever name or phone changes
    const isValid = name.trim() !== '' && phone.trim().length >= 9;
    setIsFormValid(isValid);
  }, [name, phone]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid) return;

    try {
      const response = await fetch(`${backendUrl}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone }),
      });

      if (!response.ok) {
        console.error('Failed to send request');
        // throw new Error('Failed to send request');
      }

      const data = await response.json();
      setName('');
      setPhone('');

    } catch (error) {
      // console.log();
    }
  };

  return (
    <section id="contact" className="py-5 my-5 border container rounded bg-light shadow">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 px-5">
            <h2 className="lead text-center display-6 text-uppercase text-center fw-bold">Cвязаться с нами</h2>
            <p className="lead text-center">Оставьте заявку или позвоните нам в течение 10 минут и получите авто без лимита на пробег!</p>
            <div className="d-flex justify-content-between">
              <a href="tel:+998973038228">+998 97 303 82 28</a>
              <p>8:00 - 22:00</p>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center">
            <form
              className="rounded"
              style={{ backgroundColor: '#505050', padding: '50px 70px' }}
              onSubmit={handleSubmit}
            >
              <h2 className="fs-2 text-center text-white fw-bold">Контакты</h2>

              <div className="form-group my-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group my-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  minLength="9"
                />
              </div>

              <div className="form-group my-2">
                <button
                  type="submit"
                  className="btn btn-warning w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#bookingModal"
                  id="contact-submit"
                  disabled={!isFormValid}
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
