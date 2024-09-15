// const RestaurantCard = ({resName,cousins,rating,cost,time,image}) =>{
    const RestaurantCard = (props) => {
        
        // console.log(props.resData.resName);
        props = props?.resData;
        return (
            <div className="card-container">
                <div className="card">
                    <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+props.info.cloudinaryImageId} alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{props.info.name}</h2>
                        <p className="card-description">{props.cousins}</p>
                        <div className="card-details">
                            <span className="card-rating">Rating: {props.info.avgRating}</span>
                            <span className="card-cost">Cost: {props.info.costForTwo}</span>
                            <span className="card-time">Time: {props.info.sla.slaString}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    export default RestaurantCard;