import { NavLink } from "react-router-dom";

const MobileNavLinks = ({ showLinks }) => {
  let navLinks = [];
  if (showLinks === "menu") {
    navLinks = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Shop",
        path: "/shop",
      },
    ];
  } else {
    navLinks = [
      {
        name: "Toy",
        path: "/category/toy",
      },
      {
        name: "Jewel",
        path: "/category/shop",
      },
    ];
  }
  return (
    <div className="grid gap-1 mt-2">
      {navLinks.map((item) => (
        <NavLink className="mobileNavLink" to={item.path} key={item.name}>
          {item.name}
        </NavLink>
      ))}{" "}
    </div>
  );
};

export default MobileNavLinks;
