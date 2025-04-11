import React, { useState } from 'react';
import './EmailModal.css';

const EmailModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackgroundClick = (e) => {
    if (e.target.className === 'modal') {
      setIsOpen(false);
    }
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} aria-label="Email" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <svg width="24" height="24" fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 13.065L.015 4.5h23.97L12 13.065zm0 2.13L0 6.75V19.5h24V6.75L12 15.195z" />
        </svg>
      </button>

      {isOpen && (
        <div className="modal" onClick={handleBackgroundClick}>
          <div className="modal-content">
            <span className="close-btn" onClick={handleClose}>&times;</span>
            <form action="https://formspree.io/f/SEU-ID-AQUI" method="POST">
              <h2>Send me a Letter</h2>
              <input type="email" name="reply_to" placeholder="Your email adress" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Mensage" rows="5" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailModal;
