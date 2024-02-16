import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const decoded = jwtDecode(res.data.token);
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
              token: res.data.token,
            })
          );
          dispatch(
            userLoggedIn({
              username: username,
              role: role,
              _id: _id,
              photo: photo,
              exp: exp * 1000,
              token: res.data.token,
            })
          );
          toast.success("Login Successful");
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "user/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const res = await queryFulfilled;
          const decoded = jwtDecode(res.data.token);
          const { _id, username, role, exp, photo } = decoded;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              username: username,
              role: role,
              _id: _id,
              exp: exp * 1000,
              photo: photo,
            })
          );
          localStorage.setItem(
            "token",
            JSON.stringify({
              token: res.data.token,
            })
          );
          dispatch(
            userLoggedIn({
              username: username,
              role: role,
              _id: _id,
              exp: exp * 1000,
              token: res.data.token,
              photo: photo,
            })
          );
          toast.success("Registration Successful");
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
