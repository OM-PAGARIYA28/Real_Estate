import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import "../../components/filter/filter"
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";

function ListPage(){
    const data=listData;
    return(
        <div className="listPage">
            <div className="listcontainer">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item=>(<Card key={item.id} item={item}/>))}
                </div>
            </div>
            <div className="mapcontainer">
                <Map items={data}/>
            </div>
        </div>
    )
}

export default ListPage;