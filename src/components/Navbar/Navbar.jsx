import "./Navbar.css";

import LinkWithIcon from "./LinkWithIcon";

const Navbar = () => {
  return (
    <>
      <nav className="align_center navbar">
        <div className="align_center">
          <h1 className="navbar_heading">E-Buy</h1>
          <form className="align_center navbar_form">
            <input
              type="text"
              className="navbar_search"
              placeholder="Search Products"
            />
            <button type="Submit" className="search_button">
              Search
            </button>
          </form>
        </div>

        <div className="align_center navbar_links">
          <LinkWithIcon link="/" title="Home" />
          <LinkWithIcon link="/products" title="Products" />{" "}
          <LinkWithIcon link="/login" title="LogIn" />{" "}
          <LinkWithIcon link="/signup" title="SignUp" />{" "}
          <LinkWithIcon link="/myorders" title="My Orders" />
          <LinkWithIcon link="/logout" title="Logout" />
          <a href="/cart" className="align_center">
            Cart <p className="align_center cart_counts">0</p>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
