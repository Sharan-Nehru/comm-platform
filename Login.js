import React from 'react';
import { googleLogin } from '../api';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
