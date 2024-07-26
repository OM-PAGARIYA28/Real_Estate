import "./filter.scss"

function Filter(){
    return(
        <div className="Filter"><h1>Search Results for <b>Pune</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Location</label>
                <input type="text" id="city" name="city" placeholder="City Location" />
            </div>
        </div>
        <div className="bottom">
        <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                <option value="">any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
             </div>
            <div className="item">
                <label htmlFor="propeerty">Property</label>
                <select name="property" id="property">
                <option value="">any</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="minPrice">Min Price</label>
                <input type="number" id="minPrice" name="minPrice" placeholder="any" />
            </div>
            <div className="item">
                <label htmlFor="maxPrice">Max Price</label>
                <input type="number" id="maxPrice" name="maxPrice" placeholder="any" />
            </div>
            <div className="item">
                <label htmlFor="bedroom">Bedroom</label>
                <input type="text" id="bedroom" name="bedroom" placeholder="any" />
            </div>
            <button><img src="/search.png" alt="" /></button>
        </div>
        </div>
    )
}

export default Filter;