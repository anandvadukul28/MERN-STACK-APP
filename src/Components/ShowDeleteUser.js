import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom';

import axios from 'axios';


export default function ShowDeleteUser (props) {

  const [users,setUsers]=useState([]);

//Search filter function
  const excludeColumns = ["email", "username"];
    const [searchText, setSearchText] = useState("");
    const search = value => {
  setSearchText(value);
  fildata(value);
};
const fildata = (value) => {
  const fetchData = async() => {
    const response = await axios.get("http://localhost:3000/api/users/");
    setUsers(response.data)
  }
  const lowerValue = value.toLowerCase();
  if (lowerValue === "") fetchData();
  else {
    const fData = users.filter(item => {
      return Object.keys(item).some(key =>
        excludeColumns.includes(key) ? false: item[key].toString().toLowerCase().includes(lowerValue)
      );
    });
    setUsers(fData);
  }
}

//DELETE function
  const del = async (e) => {
    await axios({
      method: 'DELETE',
      url: 'http://localhost:3000/api/users/',
      data: {
        id: e,
      },
    })
    alert("deleted");
    window.location.reload(false);
  }
  useEffect(()=>{
      const fetchData = async() => {
        const response = await axios.get("http://localhost:3000/api/users/");
        setUsers(response.data)
      }
      fetchData();
    },[])


  return(
    <>
    <br/>
    <div>
    <input className="search" type="search" placeholder="Search" aria-label="Search" value={searchText}
       onChange={(e) => {search(e.target.value)}}/><br/></div>

       <form>
    <table className="table">
             <thead >
                 <tr>
                     <th>Name</th>
                     <th>Username</th>
                     <th>Email</th>
                     <th></th>
                     <th></th>
                 </tr>
             </thead>
             <tbody>
             {
                 users.map((u, index)=>
                 {
                     return(
                         <tr key={index}>
                             <td>{u.name}</td>
                             <td>{u.username}</td>
                             <td>{u.email}</td>
                             <td><button type="button" onClick={(e)=>{del(u._id)}}>Delete</button></td>
        <td><Link to={`/UpdateUser/${u._id}`}>
            Edit User
          </Link>
        </td>
                         </tr>
                     )
                 })
             }
             </tbody>
      </table>
</form>
      </>
  )
}
