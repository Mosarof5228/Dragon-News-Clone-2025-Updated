import { useContext, useState } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Login = () => {
  const {setUser,loginUser}=useContext(AuthContext);
  const [error,setError]=useState({});

const location=useLocation();
const navigate=useNavigate();
console.log(location);

  const handleLoginSubmit=(event)=>{
    event.preventDefault();
    const form=new FormData(event.target);
    const email=form.get('email');
    const password=form.get('password');
    console.log({email,password});
    loginUser(email,password)
    .then(result=>{
      const user=result.user;
      setUser(user);
      navigate(location?.state?location.state:'/');
     

    })
    .catch((err) => {
     setError({...error,login:err.code});

      
    });
  

   
  }
    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
            <h2 className="text-center text-2xl py-2 mt-4 font-semibold">Login Your Account</h2>
            <span className="underline "></span>
      <form onSubmit={handleLoginSubmit} className="card-body">
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
          {
            error.login && <label className="text-red-500 py-2 text-sm">{error.login}</label>
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
        </div>
      </form>
    <p className="text-center">  Dont’t Have An Account ? <Link className="text-red-500 font-bold" to='/auth/register'>Register</Link></p>
    </div>
        </div>
    );
};

export default Login;