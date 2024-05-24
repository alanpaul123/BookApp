import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Phone</li>
          <li>Contacts</li>
        </ul>

        <ul>
          <li>Places</li>
          <li>Author</li>
          <li>Rate</li>
          <li>Server</li>
        </ul>

        <ul>
          <li>Cart</li>
          <li>Contact</li>
          <li>Languages</li>
          <li>Best Seller</li>
        </ul>

        <ul className="bra">
          <li>
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
