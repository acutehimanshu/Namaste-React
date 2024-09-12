// const RestaurantCard = ({resName,cousins,rating,cost,time,image}) =>{
    const RestaurantCard = (props) => {
        // console.log(props.resData.resName);
        props = props?.resData;
        return (
            <div className="card-container">
                <div className="card">
                    <img src={props.image} alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{props.resName}</h2>
                        <p className="card-description">{props.cousins}</p>
                        <div className="card-details">
                            <span className="card-rating">Rating: {props.rating}</span>
                            <span className="card-cost">Cost: ${props.cost}</span>
                            <span className="card-time">Time: {props.time}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    export default RestaurantCard;