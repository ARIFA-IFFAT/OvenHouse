
const LoginCont = () => {
  const clientId = "911890198959-a0kpd25sl0t3ei63h65raqp426lofg6o.apps.googleusercontent.com"; // paste from Google Cloud
  const redirectUri = "http://localhost:5173/auth/callback";
  const scope = "openid profile email";

  const loginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

  return (
    <div className="container">
        <div style={{height: '100px'}}></div>
      <div className="py-5 text-center">
        <h2 className="cust_h2_heading"><span className="blueColorText">Login</span></h2>
      <a href={loginUrl} className="loginBtn">
          <img 
            src="icons/g-logo.png" 
            alt="Google Logo" 
            width="20"
          />          Sign in with Google        
      </a>
      </div>
    </div>
  );
};



export default LoginCont