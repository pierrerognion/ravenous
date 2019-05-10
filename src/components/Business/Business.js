import React from 'react';
import './Business.css';

// Fake data before plugging the Yelp API
// API Info: https://www.yelp.com/developers/documentation/v3/business_search
// GET Request: GET https://api.yelp.com/v3/businesses/search
// 
// API DATA FOR BUSINESSES
// id
// alias
// name
// image_url
// is_closed
// url
// review_count
// categories ==> reference alias (pizza), title (Pizza)
// rating
// coordinates ==> latitude, longitude
// transactions ============> ??
// price
// location ==> address1, 2, 3, city, zip_code, country, state ... or display_address
// phone (or display_phone)

// Component and field mapping
class Business extends React.Component {
    
    render() {
        const { business } = this.props;
        return (
        <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars}</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
      )
    }
}

export default Business;