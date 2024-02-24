import { ArrowDown, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
      nested: false,
    },
    {
      name: "Shop",
      path: "/shop",
      nested: false,
      children: [
        {
          name: "Categories",
          path: "/shop/category",
        },
      ],
    },
  ];

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
