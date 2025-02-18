// write the component code here
import React from "react";
import "./usercard.css"; // Import the new CSS

const Usercard = () => {
  // Static user details
  const profilePhoto = "prof.jpg";
  const name = "Kartik";
  const email = "Kartik65@gmail.com";
  const phone = "+91 234 567 890";
  const address = "123 Main Street, Jaipur, India";

  return (
    <div className="usercard">
      <img src="https://stimg.cardekho.com/images/uploadimages/1713165109266/image-8037electric.png" />
      <h2 className="usercard__name">{name}</h2>
      <p className="usercard__info">{email}</p>
      <p className="usercard__info">{phone}</p>
      <p className="usercard__address">{address}</p>
    </div>
  );
};

export default Usercard;
