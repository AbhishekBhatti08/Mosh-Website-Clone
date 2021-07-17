import React from 'react'
// import logo from '../public/Images/public\Images\code-with-mosh-logo_300pix.jpg'

function Login() {
    return (
        <div style={{display: "flex",alignItems: "center",paddingTop: "40px", 
        paddingBottom: "40px",backgroundColor: "#f5f5f5"}}>

            <main className="form-signin">
                <form>
                    <img className="mb-4" src="" alt="" width="72" height="57"/>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                    </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Password</label>
                    </div>

                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                    </div>
                                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                    <p className="mt-5 mb-3 text-muted">@copy 2021</p>
                </form>
                </main>

                        </div>
                        )
}

export default Login;
