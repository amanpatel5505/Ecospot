import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid mb-8">
          <div>
            <h3>ABOUT</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Flipkart Stories</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <h3>Our Aim</h3>
            <p>
              Better Every. <br/>
              day
            </p>
          </div>
          <div>
            <h3>HELP</h3>
            <ul>
              <li><a href="#">Payments</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Report Infringement</a></li>
            </ul>
          </div>
          <div>
            <h3>CONSUMER POLICY</h3>
            <ul>
              <li><a href="#">Cancellation & Returns</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Grievance Redressal</a></li>
              <li><a href="#">EPR Compliance</a></li>
            </ul>
          </div>
          <div>
            <h3>Email.Us</h3>
            <p className="text-sm">
              EcoSpot@gmail.com
            </p>
            <br />
            <h3>Address:</h3>
            <p className="text-sm">
              Vijaywada, Wanadongri, <br />
              Hingna Road, <br />
              Nagpur-441110 <br />
              tell.no- +917541091594
            </p>
            <h3 className="social-icons-title">Social:</h3>
            <div className="social-icons">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="links">
            <a href="#">Become a Seller</a>
            <a href="#">Advertise</a>
            <a href="#">Gift Cards</a>
            <a href="#">Help Center</a>
          </div>
          <div>© 2024-2025 EcoSpot.com</div>
        </div>
        <div className="payment-methods">
          <img src="/path/to/payment-methods.png" alt="Payment Methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;