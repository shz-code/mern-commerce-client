import {
  Banknote,
  Layers2,
  ListOrdered,
  Puzzle,
  ShoppingBag,
} from "lucide-react";
import { useSelector } from "react-redux";
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
  const { role } = useSelector((state) => state.user);

  let links = [
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
  ];

  if (role === "admin")
    links = [
      ...links,
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
      {
        name: "Coupons",
        path: "/dashboard/coupons",
        icon: <Puzzle size={18} />,
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
