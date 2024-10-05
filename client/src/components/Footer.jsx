import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid mb-8">
          <div>
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3>Our Aim</h3>
            <p className='aim'>
              Empowering citizens <br />
              for a cleaner tomorrow.
            </p>
          </div>
          <div>
            <h3>Help</h3>
            <ul>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Submit an Issue</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p className="text-sm">info@swachhbharat.com</p>
            <h3 className="social-icons-title">Follow Us:</h3>
            <div className="social-icons">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <div>© 2024-2025 Swachh Bharat</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;