import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "./api";

function GoogleLogin() {

  const responseGoogle = async (authResult) => {
    try {
      if (!authResult?.code) {
        console.error("No auth code found", authResult);
        return;
      }
     
        const result = await googleAuth(authResult.code);
        //    const {fullName, email, username,} = result.data.user;

        console.log("result   backend data", result.data.user);
   
      console.log(authResult);
    } catch (err) {
      console.error("error while req", err.response?.data || err.message);
    }
  };

  const GoogleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className=" justify-self-center text-lg mt-10 ">

      
      <button
        onClick={GoogleLogin}
        className="text-amber-500 bg-blue-600 px-3 py-2 rounded-3xl  "
      >
        Login with goole{" "}
      </button>
    </div>
  );
}

export default GoogleLogin;
