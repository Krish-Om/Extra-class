import { useRef, useState } from "react";
import Input from "./input-field";
import './login.css';

const Login = () => {
  // Create refs for each input
  const firstNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  
  // Add state for popup
  const [showPopup, setShowPopup] = useState(false);

  // Handle button click
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      firstName: firstNameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value
    };
    
    console.log("Form Data:", formData);
    
    // Show success popup
    setShowPopup(true);
    
    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    
    // Optional: Reset form
    // firstNameRef.current.value = '';
    // emailRef.current.value = '';
    // phoneNumberRef.current.value = '';
  };

  return (
    <div className="login-page">
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="popup-icon">✓</div>
            <p>Login Successful!</p>
          </div>
        </div>
      )}
      
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            id="firstName"
            placeholder="Enter Your Name"
            refProp={firstNameRef}
          />

          <Input
            label="Email"
            type="email"
            id="email"
            placeholder="Enter Your Email"
            refProp={emailRef}
          />

          <Input
            label="Phone Number"
            type="tel"
            id="phoneNumber"
            placeholder="Enter Your Phone Number"
            refProp={phoneNumberRef}
          />

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
