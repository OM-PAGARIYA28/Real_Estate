import "./pin.scss";
import { Link } from "react-router-dom";
import { Marker,Popup } from "react-leaflet";

function Pin({item}){
    return(
        <Marker position={[item.latitude,item.longitude]}>
        <Popup>
            <div className="popupcontainer">
                <img src={item.img} alt="" />
                <div className="text">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                    <span className="bed">{item.bedroom} bedroom</span>
                    <b>${item.price}</b>
                </div>
            </div>
        </Popup>
      </Marker>
    )
}

export default Pin;