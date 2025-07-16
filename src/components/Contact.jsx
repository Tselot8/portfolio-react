import { useState } from "react";

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://portfolio-backend-production-aaa6.up.railway.app/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setStatusMessage("✅ Your message has been sent to Tselot Million, Thank you!");
        setStatusType("success");
        e.target.reset();
      } else {
        setStatusMessage("❌ Failed to send message.");
        setStatusType("error");
      }
    } catch (err) {
      console.error("Telegram API error:", err);
      setStatusMessage("⚠️ Something went wrong. Please try again later.");
      setStatusType("error");
    }
  };

  return (
    <section id="contact" className="py-5 bg-dark-grey">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-5">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text" className="form-control" name="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" name="email" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" name="subject" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            {/* ✅ Status Message Display */}
            {statusMessage && (
              <div
                className={`mt-3 fw-semibold ${
                  statusType === "success" ? "text-success" : "text-danger"
                }`}
              >
                {statusMessage}
              </div>
            )}
          </div>
        </div>
        <div className="mt-4">
          <p>Email: tselotmillion8@gmail.com | Phone: +251913819625</p>
          <p>
            GitHub: <a href="https://github.com/Tselot8" target="_blank" rel="noopener noreferrer">My Github account</a> | 
            LinkedIn: <a href="https://www.linkedin.com/in/tselot-million-654093309/" target="_blank" rel="noopener noreferrer">My linkedin account</a>
          </p>
        </div>
      </div>
    </section>
  );
}
