import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/BookingForm.css"

const Login = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    navigate("/little_lemon");
    window.scrollTo(0, 0);
}

  const clearForm = () => {
    setFName('');
    setLName('');
    setEmail('')
    setPhone('')
    setPassword('')
  }

  return (
    <section className="loginPage">
      <h3 className="loginHeading">Welcome Back!</h3>
      <form onSubmit={handleSubmit} className="loginform">
        <fieldset>
          <label htmlFor="fname">
            First Name <sup>*</sup>
          </label>
          <input
            type="text"
            id="fname"
            placeholder="Enter your first name"
            name="fname"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="lname">
            Last Name <sup>*</sup>
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Enter your last name"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="email">
            Email <sup>*</sup>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
       </fieldset>

        <fieldset>
          <label htmlFor="password">
            Password <sup>*</sup>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="phone">
            Phone Number <sup>*</sup>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required></input>
        </fieldset>
      
        <input className="submit" type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
