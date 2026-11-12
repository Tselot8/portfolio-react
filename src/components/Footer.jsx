export default function Footer() {
  return (
    <footer className="signal-footer">
      <div className="container">
        <span className="signal-footer-mark" aria-hidden="true" />
        <p>© {new Date().getFullYear()} Tselot Million — Built with 💻 & ☕</p>
      </div>
    </footer>
  );
}
