import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function UpdateUser(props){

  const { id } = useParams();
   let navigate = useNavigate();

  const [users, setUsers]=useState({

    name: '',
    username: '',
    email: ''
  });

useEffect(()=>{
  axios.get(`http://localhost:3000/api/users/${id}`)
  .then ((res)=>{

    setUsers({
      name: res.data.name,
      username: res.data.username,
      email: res.data.email,
    });

  })
       .catch((err) => {
         console.log('Error from UpdateUser');
       });
   }, [id]);


   const change = (e) => {
     setUsers({ ...users, [e.target.name]: e.target.value });
   };
   const submit = (e) => {
        e.preventDefault();
   const data ={
     name: users.name,
     username: users.username,
     email: users.email,
   };
       axios
         .put(`http://localhost:3000/api/users/${id}`,data)
         .then((res) => {
           navigate('/ShowDeleteUser');
           });

};
return(
<form onSubmit={submit}>
<table>
<tbody>
  <tr>
  <td>Name:<input type="text" className="form-control" name="name" onChange={change} value={users.name}/></td>
  <td>Username:<input type="text"  className="form-control" name="username" onChange={change} value={users.username}/></td>
  <td>Email:<input type="tel" className="form-control" name="email" onChange={change} value={users.email}/></td>
  </tr></tbody></table>
    <button className="btn btn-outline-primary" type = "submit">Update</button>


  </form>
)
};
