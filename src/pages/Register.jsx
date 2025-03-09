import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
      const {createUser,setUser}=useContext(AuthContext);
    const handleRegisterSubmit=(event)=>{
        event.preventDefault();
        const form=new FormData(event.target);
        const name=form.get('name')
        const email=form.get('email')
        const photo=form.get('photo')
        const password=form.get('password')
        console.log({name,email,photo,password});
        createUser(email,password)
        .then(result=>{
          const user=result.user;
          console.log(user);
          setUser(user);
    
        })
        .catch(error=>{
          console.log(error.code);
        })
    

    }
    return (
        
              <div className="flex justify-center items-center min-h-screen">
                    <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-10">
                        <h2 className="text-center text-2xl py-2 mt-4 font-semibold">Registration Your Account</h2>
                        <span className="underline "></span>
                  <form onSubmit={handleRegisterSubmit} className="card-body">
                  <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" 
                      name="name"
                      placeholder="Name" 
                       className="input input-bordered" required />
                    </div>
                  <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo</span>
                      </label>
                      <input type="text" 
                      name="photo"
                      placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" 
                      name="email"
                      placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-neutral">Registration</button>
                    </div>
                  </form>
                <p className="text-center">  Already Have An Account ? <Link className="text-red-500 font-bold" to='/auth/login'>Login</Link></p>
                </div>
                    </div>
       
    );
};

export default Register;