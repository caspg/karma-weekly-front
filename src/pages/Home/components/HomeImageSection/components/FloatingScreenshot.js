import React from 'react';

function FloatingScreenshot() {
  return (
    <div className="local-container">

      <img src="/static/images/startup-newsletter.png" alt="Karma Newsletter - Startups" />

      <style jsx>{`
        .local-container {
          max-width: 500px;
          margin: 100px auto;
        }

        img {
          border-radius: 5px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
      `}</style>
    </div>
  );
}

export default FloatingScreenshot;
