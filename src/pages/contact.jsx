import { useState } from "react";
import "./contact.css";

function Contact() {
  const [showCopy, setShowCopy] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Let&apos;s Connect 🚀</h1>
      <p className="contact-subtitle">Feel free to reach out for collaborations or project discussions.</p>

      <div className="contact-info">
        {/* 📧 Email - Click to Open + Copy Button on Hover */}
        <a 
          href="mailto:chowdhuryaryan@gmail.com" 
          className="contact-link"
          onMouseEnter={() => setShowCopy(true)}
          onMouseLeave={() => setShowCopy(false)}
        >
          <div className="contact-item">
            <span className="contact-label">📧 Email:</span>
            <span className="contact-value">chowdhuryaryan@gmail.com</span>
            {showCopy && (
              <button 
                className={`copy-btn ${copied ? "copied" : ""}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevents opening mail app when clicking copy
                  handleCopy("chowdhuryaryan@gmail.com");
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            )}
          </div>
        </a>

        {/* 🔗 LinkedIn - Click to Open */}
        <a href="https://www.linkedin.com/in/aryanchowdhury" target="_blank" rel="noopener noreferrer" className="contact-link">
          <div className="contact-item">
            <span className="contact-label">🔗 LinkedIn:</span>
            <span className="contact-value">www.linkedin.com/in/aryanchowdhury</span>
          </div>
        </a>

        {/* 💻 GitHub - Click to Open */}
        <a href="https://github.com/aryanchowdhury-art" target="_blank" rel="noopener noreferrer" className="contact-link">
          <div className="contact-item">
            <span className="contact-label">💻 GitHub:</span>
            <span className="contact-value">aryanchowdhury-art</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
