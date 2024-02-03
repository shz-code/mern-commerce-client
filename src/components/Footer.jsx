import { Copyright, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-slate-950 text-white">
      <div className="container mx-auto px-2 py-8">
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="footerCol">
            <div>
              <p className="text-4xl font-extrabold text-white">MERN</p>
            </div>
            <span className="text-gray-400">Full Stack E-coomerce store.</span>
          </div>
          <div className="footerCol">
            <div className="footerColHeader pb-4 border-b-4 border-slate-800">
              <h4 className="text-xl font-semibold uppercase">My Access</h4>
            </div>
            <div className="footerColBody">
              <ul className="mt-2 grid gap-2">
                <li>
                  <Link to="dashboard">Account</Link>
                </li>
                <li>
                  <Link to="orders">Orders</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerCol">
            <div className="footerColHeader pb-4 border-b-4 border-slate-800">
              <h4 className="text-xl font-semibold uppercase">Contact</h4>
            </div>
            <div className="footerColBody">
              <ul className="mt-2">
                <li>
                  Phone: <a href="tel:01766XXXX73">01766XXXX73</a>
                </li>
                <li className="mt-2">
                  Email:{" "}
                  <a
                    className="break-words"
                    href="mailto:contact@shahidulalam.xyz"
                  >
                    contact@shahidulalam.xyz
                  </a>
                </li>
              </ul>
              <div className="socialLinks mt-2">
                <div className="flex items-center gap-2">
                  <a href="" className="footerSocialLink">
                    <Facebook className="topBarIcon" size={20} />
                  </a>
                  <a href="" className="footerSocialLink">
                    <Linkedin className="topBarIcon" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright flex gap-1 justify-center items-center py-4 bg-slate-800">
        <Copyright size={18} />{" "}
        <span>
          Protected. Developed by{" "}
          <a
            className="text-slate-200 font-extrabold"
            href="https://github.com/shz-code"
            target="_blank"
            rel="noreferrer"
          >
            @shz-code
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
