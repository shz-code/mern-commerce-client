import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { userLoggedIn } from "../../features/auth/authSlice";

const SocialAuth = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");
  const status = searchParams.get("status");
  const msg = searchParams.get("msg");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      const { _id, username, role, exp, photo } = decoded;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          username: username,
          role: role,
          _id: _id,
          photo: photo,
          exp: exp * 1000,
        })
      );
      localStorage.setItem(
        "token",
        JSON.stringify({
          token: token,
        })
      );
      dispatch(
        userLoggedIn({
          username: username,
          role: role,
          _id: _id,
          photo: photo,
          exp: exp * 1000,
          token: token,
        })
      );
      toast.success("Login Successful");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    if (Number(status) === 400) {
      toast.error(msg);
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Working</div>;
};

export default SocialAuth;
