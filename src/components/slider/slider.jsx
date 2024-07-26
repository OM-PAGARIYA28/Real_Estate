import { useState } from "react";
import "./slider.scss"

function Slider({images}){
    const [imgindex,setImgIndex]= useState(null);
    const changeslide=(direction)=>{
        if(direction==="left"){
            if(imgindex===0){
                setImgIndex(images.length-1);
            }
            else{
                setImgIndex(imgindex-1);
            }

        }
        else{
            if(imgindex===images.length-1){
                setImgIndex(0);
            }
            else{
                setImgIndex(imgindex+1);

            }

        }

    }

    return(
        <div className="slider">
            {imgindex !==null &&(
            <div className="full">
                <div className="arrow">
                    <img src="/arrow.png" alt="" onClick={()=>changeslide("left")} />
                </div>
                <div className="imgcontainer">
                    <img src={images[imgindex]} alt="" />
                </div>
                <div className="arrow"  onClick={()=>changeslide("right")}>
                <img src="/arrow.png" alt="" className="right" />
                </div>
                <div className="close" onClick={()=>setImgIndex(null)}>X</div>
            </div>
           ) }
            <div className="big">
                <img src={images[0]} alt="" onClick={()=>setImgIndex(0)} />
            </div>
            <div className="small">
                {images.slice(1).map((image,index)=>(
                    <img src={image} alt="" key={index} onClick={()=>setImgIndex(index+1)} />
                ))}
            </div>
        </div>
    )
}

export default Slider;