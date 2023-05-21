import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function App() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_mac1gjl', form.current, 'hBfaS6THc2wq1HC0s')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClick = () => {
    // Handle click logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ background: '#f8f8f8', width: '600px', padding: '40px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Billing Address</h2>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Payment</h2>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1', marginRight: '40px' }}>
            <form ref={form} onSubmit={sendEmail}>
              <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} type="text" name="user_name" placeholder="Full Name" />
              <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} type="email" name="user_email" placeholder="Email" />
              <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} name="address" placeholder="Address" />
              <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} name="city" placeholder="City" />
              <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} id="status" placeholder="State" />
              <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} id="zip" placeholder="Zip" />
              <input style={{ marginBottom: '10px', padding: '10px', width: '100%', background: '#4caf50', color: 'white', fontWeight: 'bold', cursor: 'pointer' }} type="submit" value="Send" onClick={handleClick} />
            </form>
          </div>
          <div style={{ flex: '1' }}>
            <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} type="text" name="card_name" placeholder="Name on Card" />
            <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} type="email" name="number" placeholder="Card number" />
            <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} name="exp_month" placeholder="Exp Month" />
            <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} name="exp_year" placeholder="Exp Year" />
            <input style={{ marginBottom: '10px', padding: '10px', width: '100%' }} name="cvv" placeholder="CVV" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;