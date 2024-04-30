import React from "react";

const ContactForm = () => {
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
                  <p>contact@expresscarcleaning.in</p>
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
                  id="contact-form"
                  method="post"
                  action="mailto:contact@expresscarcleaning.in"
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
