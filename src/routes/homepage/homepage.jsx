import Searchbar from "../../components/searchbar/Searchbar";
import "./homepage.scss"

const Homepage =() =>{
    return (
        <div className="homepage">
        <div className="textContainer">
            <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream House </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur impedit cum porro laborum tempore temporibus nesciunt dolor natus eius eos earum modi reiciendis illo, veniam, quis dolore voluptatibus eaque.</p>
            <Searchbar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
            
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
        </div>
    )
}

export default Homepage;