import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const sendQuery = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { name: name, email: email, number: number, query: query },
    };

    fetch(
      "https://api.expresscarscleaning.in/query/send-mail/query-by-customer",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.baseResponse.status === 1) {
          setSuccess(true);
          window.open(`https://wa.me/918527936779?text=${query}!`);
        } else {
          setSuccess(false);
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <section>
        <div className="container contact-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-info">
                <h3>Get in touch with us</h3>
                <p>
                  Questions about our services? We're happy to chat! Reach out
                  and let's get your car looking its best.
                </p>
                <div className="span-contact">
                  <div className="contact-icon">
                    <i className="fas fa-phone" />
                  </div>
                  <p>+91 8527936779</p>
                </div>
                <div className="span-contact">
                  <div className="contact-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <p>expresscar94@gmail.com</p>
                </div>
                <div className="span-contact">
                  <div className="contact-icon">
                    <i className="fas fa-map" />
                  </div>
                  <p>
                    Shop No.1 Snatan Dharam Mandir East laxmi nagar market Delhi
                    110092
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form">
                <form
                  // autocomplete={true}
                  id="contact-form"
                  // method="post"
                  onSubmit={sendQuery}
                >
                  <div className="messages" />
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            className="form-control customize"
                            placeholder="Name"
                            required="required"
                            data-error="Firstname is required."
                            onChange={(e) => setName(e.target.value)}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            className="form-control customize"
                            placeholder="Email address"
                            required="required"
                            data-error="Valid email is required."
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            id="form_phone"
                            type="tel"
                            name="phone"
                            className="form-control customize"
                            placeholder="Please enter your phone"
                            onChange={(e) => setNumber(e.target.value)}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12 mt-3 mb-3">
                        <div className="form-group">
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Your message"
                            rows={5}
                            required="required"
                            data-error="Please,leave us a message."
                            onChange={(e) => setQuery(e.target.value)}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <p>
                          <input
                            type="submit"
                            className="btn btn-contact submit-btn"
                            defaultValue="Send message"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  {success && <span>Query has been raised successfully</span>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
