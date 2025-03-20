import React from 'react'
import image from './Laravel Introduction.png'
import { firstName, lastName } from '../../utilis/constant'
const Hero = () => {
  return (
    <>
    
  <h1 align="center">Its Hero Section</h1>
  <p>its onlne pic</p>

  <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="err" width={100} />

  <p>and its offline when we use oflline then we put src inside of curly bracket</p>
  <img src={image} alt="" />
  <p>the first name is {firstName}and the last name is {lastName}</p>
    </>
  )
}

export default Hero