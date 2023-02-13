import React, { useState } from "react";

import './card.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



export default function CreateUser (props) {

const [users, setUsers] = useState([
]);

const change = (e) => {
  setUsers({ ...users, [e.target.name]: e.target.value });
};

const submit = (e) => {
    // e.preventDefault();
   alert("Registered Successfully");
    axios
      .post('http://localhost:3000/api/users', users)
      .then((res) => {
        setUsers({
          name: '',
          username: '',
          email: '',
        });

      })


      .catch((err) => {
        console.log('Error in CreateUser!');
      });
      navigate('/Home', {
        state:{
          users: users.name
        },
      });
    };
    const navigate = useNavigate();


  return (
    <>

    <br/>
    <form onSubmit={submit}>
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card2 card border-0 px-4 py-5">

                    <div className="row px-3">
                        <label className="mb-1"><h6 className="mb-0 text-sm">Name</h6></label>
                        <input className="mb-4" type="text" required aria-required="true" name="name"value={users.name} onChange={change} placeholder="Enter Name"/>
                    </div>
                    <div className="row px-3">
                        <label className="mb-1"><h6 className="mb-0 text-sm">Username</h6></label>
                        <input type="text" name="username" required aria-required="true" placeholder="Enter Username" value={users.username} onChange={change}/>
                    </div>
                    <div className="row px-3">
                        <label className="mb-1"><h6 className="mb-0 text-sm">Email</h6></label>
                        <input type="text" name="email" required aria-required="true" placeholder="Enter a valid email" value={users.email} onChange={change}/>
                    </div>
                    <div>
                        <a className="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div>
                    <div className="row mb-3 px-3">
                      <button type="submit" className="btn btn-blue text-center" >Login</button>
                    </div>
                    <div className="row mb-4 px-3">
                        <small className="font-weight-bold">Don't have an account? <a href="#" className="text-danger ">Register</a></small>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-blue py-4">
            <div className="row px-3">
                <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
            </div>
        </div>
    </div>
</div>
</form>


  </>
  )
}
