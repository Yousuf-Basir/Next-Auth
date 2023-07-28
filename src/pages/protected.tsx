import validateToken from "@/util/validateToken";
import { GetServerSidePropsContext } from "next";
import React from "react";

type Props = {
  token: string;
};

const Protected = (props: Props) => {
  return (
    <div>
      <div>Protected</div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <br />
      <a href="/">Home</a>
      <br />
      <a href="/auth/login">Login page</a>
    </div>
  );
};

// get server side props
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // get token from cookie
  const token = ctx.req.cookies?.next_auth_token;
  if(!validateToken(token)) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  // if there is a token, return the token
  return {
    props: {
      token,
    },
  };
};

export default Protected;
