import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Header from '../../Components/Header/Header'
import LeftMenu from '../../Components/LeftMenu/LeftMenu'
import RightMenu from '../../Components/RightMenu/RightMenu'
import './style.scss'
function LandingPage() {
  let [products,setProduct]=useState([])
  useEffect(() => {
    axios.get("http://localhost:4000/products").then(res=>{
      setProduct(res.data)
    })
  }, []);
  return (
    <div className='page-container'>
      <div className='page-innerContainer'>

        <Header/>
        <div className='page-innerContainer-bottomContainer'>
        <LeftMenu/>
        <RightMenu products={products}/>
        </div>
        </div>
    </div>
  )
}

export default LandingPage