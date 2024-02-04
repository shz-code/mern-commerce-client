import {
  Banknote,
  CircleUser,
  Layers2,
  ListOrdered,
  ShoppingBag,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ link }) => {
  return (
    <NavLink to={link.path}>
      {link.icon}
      {link.name}
    </NavLink>
  );
};

const DashboardLinks = () => {
  let links = [
    {
      name: "Profile",
      path: "/dashboard",
      icon: <CircleUser size={18} />,
    },
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: <ListOrdered size={18} />,
    },
    {
      name: "Payments",
      path: "/dashboard/payments",
      icon: <Banknote size={18} />,
    },
    {
      name: "Categories",
      path: "/dashboard/categories",
      icon: <Layers2 size={18} />,
    },
    {
      name: "Products",
      path: "/dashboard/products",
      icon: <ShoppingBag size={18} />,
    },
  ];
  return (
    <div>
      {links.map((item) => (
        <LinkItem key={item.name} link={item} />
      ))}
    </div>
  );
};

export default DashboardLinks;
