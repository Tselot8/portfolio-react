export default function Footer() {
  return (
    <footer className="py-4 text-center" style={{backgroundColor: '#000000'}}>
      <p>© {new Date().getFullYear()} Tselot. All rights reserved.</p>
    </footer>
  );
}