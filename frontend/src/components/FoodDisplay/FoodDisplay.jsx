import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category, limit, topRatedFoods, searchTerm}) => {
    
    const {food_list, loading} = useContext(StoreContext);
    
    // Show loading state while fetching data
    if (loading) {
        return (
            <div className='food-display' id='food-display'>
                <div className="food-display-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading delicious food items...</p>
                </div>
            </div>
        );
    }
    
    // Use topRatedFoods if provided, otherwise use regular food_list
    let itemsToShow = topRatedFoods && topRatedFoods.length > 0 ? topRatedFoods : food_list;
    
    // Filter by category if not using topRatedFoods
    if (!topRatedFoods || topRatedFoods.length === 0) {
        itemsToShow = food_list.filter(item => {
            return category === 'All' || category === item.category;
        });
    }
    
    // Filter by search term if provided
    if (searchTerm && searchTerm.trim() !== '') {
        itemsToShow = itemsToShow.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Apply limit if specified
    if (limit) {
        itemsToShow = itemsToShow.slice(0, limit);
    }

    // Show "no results" message if no items match
    if (itemsToShow.length === 0) {
        return (
            <div className='food-display' id='food-display'>
                <div className="food-display-no-results">
                    <div className="no-results-icon">🍽️</div>
                    <h3>No dishes found</h3>
                    <p>{searchTerm ? `No dishes match "${searchTerm}"` : `No dishes in "${category}" category`}</p>
                    <p className="suggestion">Try searching for something else or explore different categories!</p>
                </div>
            </div>
        );
    }

  return (
    <div className='food-display' id='food-display'>
        <div className="food-display-list">
            {itemsToShow.map((item,index)=>{
                return <FoodItem 
                    key={index} 
                    id={item._id} 
                    name={item.name} 
                    description={item.description} 
                    price={item.price} 
                    image={item.image}
                    averageRating={item.averageRating}
                    totalReviews={item.totalReviews}
                />
            })}
        </div>
    </div>
  )
}

export default FoodDisplay