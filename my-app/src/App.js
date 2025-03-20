import React from "react";
import  './App.css' 
import  'bootstrap/dist/css/bootstrap.min.css';
import Header  from "./components/header/Header";
import Hero  from "./components/hero/Hero";
import Footer  from "./components/footer/Footer";
import List from './components/list/List.jsx'


const App = () => {
  return (
    <>
   <Header></Header>
   <Hero></Hero>
   <Footer></Footer>
   <List></List>
   </>
  )
};

export default App;
