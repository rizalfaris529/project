import React, { useEffect, useState } from "react";
import './style.css'
import axios from "axios";

const Homescreen = () => {

    const [data,setData] = useState('')

    useEffect(() => {
        coba()
    },[])

    const coba = async () => {
        const result = await axios.get('https://dummyjson.com/products')
        console.log('hasil',result.data.products);
        setData(result.data.products)
    }

    return (
        <div>
            <h1>day18</h1>
            <h1>homescreen</h1>
            
            <div style={{display:"flex",flexWrap:"wrap",gap:"30px",alignItems:"center"}}>
                {
                    data && data.map((item,index) => {
                        return(
                        <div className="awal" key={index}>
                            <div style={{alignItems:"center",textAlign:"center"}}>
                            <img style={{width:"10vw",height:'7.5vw',objectFit:"cover"}} src={item.thumbnail} alt="" />
                            <p style={{fontWeight:"bold"}}>{item.title}</p>
                            </div>
                            
                            <div style={{display:"flex",gap:'10px',justifyContent:"center"}}>
                            <p style={{fontWeight:"bold",color:'brown'}}>Rp. {item.price}0.000</p>
                            <img style={{width:'2vw',height:'3vw',marginLeft:'-5px'}} src="https://img.freepik.com/free-vector/start_53876-25533.jpg" alt="" /><p style={{marginLeft:'-15px'}}>{item.rating}</p>

                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Homescreen