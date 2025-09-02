import { useState } from "react"

const SubcribeForm = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const validateEmail = (email) => {
    // Simple regex for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError("");
    setSuccessMsg("");

    //live validation
    if (value && !validateEmail(value)) {
      setError("Please enter a valid email address.")
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      //valid email
      setSuccessMsg("Subscribed successfully!");
      setError(""); // clear any old error
      setEmail(""); // clear field

      
      // ✅ Send email to backend / API
      console.log("Subscribed email: ", email);

      // hide success message after 3 seconds

      setTimeout(() => {
        setSuccessMsg("");

      }, 3000);
    } else {
      //invalid email
      setError("Please enter a valid email address.");
      setSuccessMsg("");


      // Clear input after submit
      setEmail("");
    }

  };

  return (
    <div className="subcribeDiv">
      <form className="" id="subscribeForm" onSubmit={handleSubmit}>
        <input type="email" value={email} id="subEmail"
          placeholder="Enter your valid email here..."
          onChange={handleChange} />
        <input type="submit" value="Subscribe" id="subSubmit" />
        {/* used Ternary operator to show error/success message  */}
        {error ? (<p style={{ color: "red", fontSize: "14px" }}>{error}</p>) : successMsg ? (<p style={{ color: "green", fontSize: "14px" }}>{successMsg}</p>) : null}

      </form>
    </div>
  )
}

export default SubcribeForm