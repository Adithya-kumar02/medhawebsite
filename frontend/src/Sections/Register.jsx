import React from "react";


const Register = () => {
  const handleRegisterClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScNqvwY-5jkkskrQSg_FqaH95CXnedNovF78HME-pdJ6cluYw/viewform?usp=dialog", "_blank");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Registration</h1>
        <button className="register-btn" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;