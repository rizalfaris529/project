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
                        <div key={index}>
                            <div style={{alignItems:"center",textAlign:"center"}}>
                            <img style={{width:"10vw",height:'7.5vw',objectFit:"cover"}} src={item.thumbnail} alt="" />
                            <p>{item.title}</p>
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