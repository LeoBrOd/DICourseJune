import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Contact = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  const redirect = () => {
    navigate("/about");
  };
  return (
    <>
      <h1>Contact</h1>
      <Link to="/about">About Page</Link>
      <button onClick={redirect}>About page</button>
    </>
  );
};
export default Contact;
