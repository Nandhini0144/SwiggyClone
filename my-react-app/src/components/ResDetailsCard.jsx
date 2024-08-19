const ResDetailsCard=(props)=>{
    const recommends=props.recommends;
    console.log(recommends)
    return(
        
            <div className="restaurantdetails-card">
                <div className="left">
                   <p>Name:{recommends.name}</p>
                   <p>Price:{recommends.price}</p>
                </div>
                <div className="res-details-card-img">
                    <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+recommends.imageId} className="img"></img>
                </div>
            </div>
    )
}
export default ResDetailsCard