import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RestaurantCard from '../src/components/RestaurantCard'

const mockData = {
    "info": {
        "id": "588619",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_588619.JPG",
        "locality": "Brigade Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
        ],
        "avgRating": 4.4,
        "parentId": "547",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.9K+",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-10-02 01:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.0",
                "ratingCount": "317"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
        "type": "WEBLINK"
    }
}; 
test("Should load my card", ()=>{
    render(<RestaurantCard resData={mockData}/>);
    const cardHeading = screen.getByText("KFC");
    expect(cardHeading).toBeInTheDocument()
});