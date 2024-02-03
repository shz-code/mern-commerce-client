import { Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="bg-slate-950 text-white hidden sm:block">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          <span>
            <a
              className="text-sm font-semibold"
              href="mailto:contact@shahidulalam.xyz"
            >
              contact@shahidulalam.xyz
            </a>
          </span>
          <div className="flex items-center gap-2">
            <a href="" className="topBarIconLink">
              <Facebook className="topBarIcon" size={20} />
            </a>
            <a href="" className="topBarIconLink">
              <Linkedin className="topBarIcon" size={20} />
            </a>
            <Link
              to="/shop"
              className="inline-block bg-slate-800 py-3 px-4 font-bold ms-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
