import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const Navbar = () => {
const {user,logOut,setUser}=useContext(AuthContext);
console.log(user);
const handleSignOut=()=>{
  logOut();
  setUser(null);
}

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" flex items-center justify-center gap-2">
          {
            user && user?.email?<div><img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" /></div>:<img src={userIcon} alt="" />
          }
          <p>{user?.displayName}</p>
        </div>
        
        {
          user? <Link onClick={handleSignOut} className="btn btn-neutral rounded-none">Sign-Out</Link>: <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
