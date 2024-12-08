import React, { useContext } from "react";
import { Authcontext } from "./Authprovider";
import { NavLink } from "react-router-dom";

const Signup = () => {

  const {createuser} = useContext(Authcontext)
    const handlesignup = e => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
        console.log(email,password);
        createuser(email,password)
        .then(result => {
          console.log(result);

          const newuser = {email,name}
          fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newuser)
          })
          .then(res => res.json())
          .then(data => {
            console.log('user created db is', data);
            if(data.insertedId){
              console.log('user created in db');
            }
          })
        })
        .catch(err => {
          console.log(err);
        })

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handlesignup}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
              name='name'
                type="text"
                placeholder="name"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name='email'
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name='password'
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="">
            <h2 className="font-bold">
                if you have account 
                <NavLink to='/signin' className="text-teal-400">--Sign in</NavLink>
            </h2>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
