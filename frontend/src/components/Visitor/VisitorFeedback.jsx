import React, { useState } from 'react';
import './VisitorFeedback.css';

function VisitorFeedback() {
  const [feedback, setFeedback] = useState('');
  const [listening, setListening] = useState(false);
  const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  let speech;

  const handleSpeechInput = () => {
    if (!recognition) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    if (!speech) {
      speech = new recognition();
      speech.lang = 'en-US';
      speech.continuous = false;
      speech.interimResults = false;

      speech.onstart = () => setListening(true);
      speech.onend = () => setListening(false);

      speech.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setFeedback((prev) => prev + ' ' + transcript);
      };
    }

    speech.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback Submitted:\n' + feedback);
    setFeedback('');
  };

  return (
    <div className="feedback-container">
      <h2>Visitor Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Type or speak your feedback here..."
        ></textarea>

        <div className="feedback-buttons">
          <button type="button" onClick={handleSpeechInput} className="speak-btn">
            🎤 Speak
          </button>
          <button type="submit" className="submit-btn">
            ✅ Submit
          </button>
        </div>
        {listening && <p className="listening-msg">Listening... 🎙️</p>}
      </form>
    </div>
  );
}

export default VisitorFeedback;
