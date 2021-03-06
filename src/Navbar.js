import React from "react";
import "./Navbar.css";

const logo = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5GJCZFMV9V9lZClsuxVIT43hD0FTfqPyoA&usqp=CAU`;
const user_avatar = `https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png`;
function Navbar() {
  const [show, handleShow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`nav ${show && "nav__blank"}`}>
      <img className="nav__logo" src={logo} alt="logo" />
      <img className="nav__avater" src={user_avatar} alt="user_avater" />
    </nav>
  );
}

export default Navbar;
