import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    let err = useRouteError();
    console.log(err);
  return (
    <div>
        <h2>Ooops !! Something went wrong</h2>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default Error