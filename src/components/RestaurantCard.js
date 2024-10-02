// const RestaurantCard = ({resName,cousins,rating,cost,time,image}) =>{
    const RestaurantCard = (props) => {
        
        // console.log(props.resData.resName);
        props = props?.resData;
        return (
            <div data-testid="resCardTest" className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-green-200">
                <div className="card">
                    <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+props.info.cloudinaryImageId} alt="Card Image" className="rounded-lg" />
                    <div className="card-content">
                        <h2 className="font-bold py-4 text-lg">{props.info.name}</h2>
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

    export const withPromotedLabel = (RestaurantCard)=>{
        return (data)=>{
            return(
                <>
                <label className="absolute p-4 bg-red-400 text-white">Recommended</label> 
                <RestaurantCard {...data} />
            </>
            )
        }
    }
    export default RestaurantCard;