import { ArrowDown, ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  let navLinks = [
    {
      name: "Home",
      path: "/",
      nested: false,
    },
    {
      name: "Login",
      path: "/login",
      nested: false,
    },
    {
      name: "Register",
      path: "/register",
      nested: false,
    },
    {
      name: "Shop",
      path: "/shop",
      nested: true,
      children: [
        {
          name: "Categories",
          path: "/shop/category",
        },
      ],
    },
  ];

  const { _id } = useSelector((state) => state.user);
  if (_id) {
    navLinks = navLinks = [
      {
        name: "Home",
        path: "/",
        nested: false,
      },
      {
        name: "Shop",
        path: "/shop",
        nested: true,
        children: [
          {
            name: "Categories",
            path: "/shop/category",
          },
        ],
      },
    ];
  }

  return navLinks.map((navItem) => (
    <li key={navItem.name}>
      <NavLink to={navItem.path}>
        {navItem.name} {navItem.nested && <ArrowDown size={15} />}
      </NavLink>
      {navItem.nested && (
        <ul className="nestedLinksContainer">
          {navItem.children.map((nestedLinks) => (
            <li key={nestedLinks.name}>
              <NavLink to={nestedLinks.path}>
                {nestedLinks.name} <ArrowRight size={15} />
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));
};

export default NavLinks;
