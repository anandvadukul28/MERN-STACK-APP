import React from 'react';
import { useLocation } from 'react-router-dom'

export default function Home (props){
  const location = useLocation();
  console.log('location', location)
  return(
    <div>
    <h1><b>WELCOME {location.state.users} !!!</b></h1>
    </div>

  )
}
