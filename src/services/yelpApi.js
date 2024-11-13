const YELP_API_KEY = 'YOUR_YELP_API_KEY';
const BASE_URL = 'https://api.yelp.com/v3/businesses';

export const searchRestaurants = async (term, location = 'your_default_location') => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?term=${term}&location=${location}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    );
    const json = await response.json();
    return json.businesses || [];
  } catch (error) {
    console.error('Error fetching from Yelp:', error);
    return [];
  }
}; 