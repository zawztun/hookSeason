import React from 'react';
import { useFormik } from 'formik';

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      Name: '',
      Phone: '',
      Email: '',
      Subject: '',
      Message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
   <formik >
     
      <div className="contact-area">
        <div className="ui container">
          <div className="row">
            <div className="col-lg-12">

              <div className="contact-message">
                <h2>tell us your project</h2>
                <form 
                  onSubmit={formik.handleSubmit}
                  id="contact-form"
                  action="assets/php/mail.php"
                  method="post"
                  className="contact-form">
                  <div className="row">
                    
                      <label htmlFor="firstName">Name</label>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                      <input
                        name="Name"
                        placeholder="Name*"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Name}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <label htmlFor="Phone">Phone</label>
                      <input
                        id="Phone"
                        PlaceHolder="Phone"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.Phone}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <label htmlFor="Email">Email</label>
                      <input
                        id="Email"
                        PlaceHolder="Email"
                        type="Email"
                        onChange={formik.handleChange}
                        value={formik.values.Email}
                      />
                    </div>
                    <label htmlFor="Subject">Subject</label>
                    <input
                      id="Subject"
                      PlaceHolder="Subject"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.Subject}
                    />

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <label htmlFor="Email">Message</label>
                      <input
                        id="Message"
                        PlaceHolder="Message"
                        type="Message"
                        onChange={formik.handleChange}
                        value={formik.values.Message}
                      />
                    </div>
                    <div className="col-12">
                      <div className="contact2-textarea text-center">
                        <textarea
                          placeholder="Message *"
                          name="message"
                          className="form-control2"
                          required
                          defaultValue={''}
                        />
                      </div>
                      <div className="contact-btn">
                        <button className="btn btn__bg" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <p className="form-messege" />
                    </div>
                  </div>
                </form>
              </div>
            </div>

          <div className="col-lg-6">
              <div className="contact-info">
                <h2>contact us</h2>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum claram anteposuerit
                  litterarum formas human.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-fax" /> Address : No 40 Baria Sreet
                    133/2 NewYork City
                  </li>
                  <li>
                    <i className="fa fa-phone" /> info@yourdomain.com
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" /> +88013245657
                  </li>
                </ul>
                <div className="working-time">
                  <h3>Working hours</h3>
                  <p>
                    <span>Monday – Saturday:</span>08AM – 22PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
      ); 
    </formik>
  );
};

export default Contact;
