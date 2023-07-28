import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";
import { GetServerSidePropsContext } from "next";
import validateToken from "@/util/validateToken";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        email: "test@gmail.com",
        password: "123456",
      });
      if (response.status === 200) {
        router.replace("/protected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// get server side props
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    // get token from cookie
    const token = ctx.req.cookies?.next_auth_token;
    if(validateToken(token)) {
      return {
        // redirect to where user came from
        redirect: {
            destination: ctx.req.headers.referer || "/",
            permanent: false,
        },
      };
    }
  
    // if there is a token, return the token
    return({
        props: {},
    });
  };

export default Login;
