import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../../components/FoodItem/FoodItem';
import './SearchResults.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { food_list } = useContext(StoreContext);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query && food_list.length > 0) {
      setLoading(true);
      const results = food_list.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setLoading(false);
    } else {
      setSearchResults([]);
      setLoading(false);
    }
  }, [query, food_list]);

  if (loading) {
    return (
      <div className="search-loading">
        <p>Searching...</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="search-header">
        <h2>Search Results for "{query}"</h2>
        <p>{searchResults.length} item{searchResults.length !== 1 ? 's' : ''} found</p>
      </div>
      
      {searchResults.length > 0 ? (
        <div className="search-results-grid">
          {searchResults.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No items found</h3>
          <p>Try searching with different keywords or browse our menu.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
