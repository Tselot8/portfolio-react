export default  function Contact() {
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
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent to Telegram!");
      } else {
        alert("Failed to send message.");
      }
      e.target.reset();
    } catch (err) {
        console.error("Telegram API error:", err.response?.data || err.message);
        res.status(500).json({ success: false, message: "Failed to send message." });
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
          </div>
        </div>
        <div className="mt-4">
          <p>Email: tselotmillion8@gmail.com | Phone: +251913819625</p>
        </div>
      </div>
    </section>
  );
}