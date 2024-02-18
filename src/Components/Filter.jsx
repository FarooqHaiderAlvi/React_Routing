import { useState } from 'react'
import {useSearchParams} from 'react-router-dom'

export default function Filter() {
 
    const [searchParams,setSearchParams]=useSearchParams();
    const age=searchParams.get('age');
  return (
    <>
       My age is {age};
    </>
  )
}
