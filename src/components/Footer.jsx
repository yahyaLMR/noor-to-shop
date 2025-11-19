function Footer() {
  return (
    <footer className="bg-noor-darkest text-noor-light py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-noor-gold font-bold text-xl mb-4">noor to shop</h3>
            <p className="text-sm">Quality products for your everyday needs</p>
          </div>
          <div>
            <h4 className="text-noor-gold font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-noor-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-noor-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-noor-gold transition-colors">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-noor-gold font-bold mb-4">Contact</h4>
            <p className="text-sm">Email: info@noortoshop.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-noor-dark mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 noor to shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
