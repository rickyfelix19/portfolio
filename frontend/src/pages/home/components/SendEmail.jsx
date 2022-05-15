import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../../../index.css';

function SendEmail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section>
        <div className="flex m-auto w-full justify-center faq-box">
          <div>
            <div className="flex flex-col text-center mb-16">
              <h1 className="text-h1">Come and Say Hi</h1>
              <h3 className="text-h3">No spam, I promise!</h3>
            </div>
            <div>
              <div>
                <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                  <label>Name:</label>
                  <input type="text" name="user_name" />
                  <label>Email:</label>
                  <input type="email" name="user_email" />
                  <label>Reason for sending email</label>
                  <select value="Reason for sending email">
                    <option value="0">Choose here</option>
                    <option value="1">Collaborating</option>
                    <option value="2">Feedback</option>
                    <option value="3">Working</option>
                    <option value="4">Say Hi</option>
                    <option value="5">Others</option>
                  </select>
                  <label>Message</label>
                  <textarea name="message" className="h-4/6 w-full" />
                  <button>
                    <input
                      className="button-primary content-between"
                      type="Send Email"
                      value="send"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SendEmail;
