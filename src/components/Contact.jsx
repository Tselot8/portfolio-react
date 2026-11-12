import { useState } from "react";

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    const form = e.currentTarget;
    setIsLoading(true);
    setStatusMessage("");

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://portfolio-backend-qhoq.onrender.com/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage("✅ Your message has been sent to Tselot Million, thank you!");
        setStatusType("success");
        form.reset();
      } else {
        setStatusMessage("❌ Failed to send message.");
        setStatusType("error");
      }
    } catch (err) {
      console.error("Telegram API error:", err);
      setStatusMessage("⚠️ Something went wrong. Please try again later.");
      setStatusType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="signal-contact">
      <div className="container signal-contact-layout">
        <div className="signal-contact-copy">
          <div className="signal-section-heading">
            <span className="signal-section-index" aria-hidden="true">05 / CONTACT</span>
            <span className="signal-rule" aria-hidden="true" />
            <h2 className="signal-section-title">Contact Me</h2>
          </div>

          <div className="signal-contact-details">
            <p><span className="signal-contact-label">Email:</span> tselotmillion8@gmail.com</p>
            <p><span className="signal-contact-label">Phone:</span> +251913819625</p>
          </div>
          <div className="signal-contact-socials">
            <p>
              <span className="signal-contact-label">GitHub:</span>
              <a href="https://github.com/Tselot8" target="_blank" rel="noopener noreferrer">
                My Github account <span aria-hidden="true">&#8599;</span>
              </a>
            </p>
            <p>
              <span className="signal-contact-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/tselot-million-654093309/" target="_blank" rel="noopener noreferrer">
                My linkedin account <span aria-hidden="true">&#8599;</span>
              </a>
            </p>
          </div>
        </div>

        <div className="signal-contact-form-panel">
          <form className="signal-contact-form" onSubmit={handleSubmit} aria-busy={isLoading} aria-describedby="contact-feedback">
            <div className="signal-form-row">
              <div className="signal-field">
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" type="text" name="name" placeholder="Your Name" autoComplete="name" required />
              </div>
              <div className="signal-field">
                <label htmlFor="contact-email">Your Email</label>
                <input id="contact-email" type="email" name="email" placeholder="Your Email" autoComplete="email" required />
              </div>
            </div>
            <div className="signal-field">
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="signal-field">
              <label htmlFor="contact-message">Your Message</label>
              <textarea id="contact-message" name="message" rows="5" placeholder="Your Message" required />
            </div>
            <button type="submit" className="signal-submit" disabled={isLoading}>
              {isLoading ? (
                <><span className="signal-send-spinner" aria-hidden="true" />Sending...</>
              ) : (
                <>Send Message <span className="signal-submit-arrow" aria-hidden="true">&#8599;</span></>
              )}
            </button>
          </form>

          <div
            id="contact-feedback"
            className={`signal-contact-feedback${isLoading ? ' is-loading' : statusMessage ? ` is-${statusType}` : ''}`}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {isLoading ? "Sending your message, please wait..." : statusMessage}
          </div>
        </div>
      </div>
    </section>
  );
}
