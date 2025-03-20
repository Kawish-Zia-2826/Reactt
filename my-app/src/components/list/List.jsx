import React from 'react'

const List = () => {
  const user  =true
  const abcd  = [12,3,1234,123,21,32,321,3,123];
  return (
    <>
  <h2>This is list maping</h2>
    {abcd.map((item,index)=>{
      return(
        <p>{item}</p>
      )
    })}
    <p>{user?"ha hai user":"nahi hai user "}</p>
    </>
  )
}

export default List