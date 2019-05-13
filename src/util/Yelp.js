const apiKey = process.env.REACT_APP_YELP_API_KEY;

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};

export default Yelp;

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