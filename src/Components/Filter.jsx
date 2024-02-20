import { useState } from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'

export default function Filter() {
   const currentState=useLocation();
   console.log(currentState);
    const [searchParams,setSearchParams]=useSearchParams();
    const age=searchParams.get('age');
  return (
    <>
       My age is {age};
    </>
  )
}
