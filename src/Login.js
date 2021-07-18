import React,{useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
// import logo from '../public/Images/public\Images\code-with-mosh-logo_300pix.jpg'

const clientId = "476669499742-aanemsrs49c2o42hkelhd5td3514hfq2.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div style={{
            display: "flex", alignItems: "center", paddingTop: "40px",
            paddingBottom: "40px", backgroundColor: "#f5f5f5"
        }}>

            <main className="form-signin">
                <form>
                    <img className="mb-4" src="/images/logo3x.jpg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <div>
                        {showloginButton ?
                            <GoogleLogin
                                clientId={clientId}
                                buttonText="Sign In"
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            /> : null}

                        {showlogoutButton ?
                            <GoogleLogout
                                clientId={clientId}
                                buttonText="Sign Out"
                                onLogoutSuccess={onSignoutSuccess}
                            >
                            </GoogleLogout> : null
                        }
                    </div>
                    <p className="mt-5 mb-3 text-muted">@copy 2021</p>
                </form>
            </main>


        </div>
    )
}

export default Login;
