import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const {signIn} = useContext(AuthContext);

  useEffect( () =>{
    loadCaptchaEnginge(6);
  }, [])

    const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form?.email?.value;
      const password = form?.password?.value;
      
      signIn(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
    }

    const handleValidateCaptcha = () => {
      const user_captcha_value = captchaRef.current.value;
      if(validateCaptcha(user_captcha_value)) {
        setDisabled(false);
        console.log('Captcha validated successfully');
      }
      else {
        setDisabled(true);
        console.log('Captcha validation failed');
      }
    }
    return (
        <section>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <LoadCanvasTemplate />
          </label>
          <input type="text" ref={captchaRef} name="captcha" placeholder="Type the text above" className="input input-bordered" required />
          <button onClick={handleValidateCaptcha} className="btn btn-xs btn-outline mt-2">Validate</button>
    
        </div>
        <div className="form-control mt-6">
          {/* <button disabled={disabled} className="btn btn-primary">Login</button> */}
          <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </section>
    );
};

export default Login;