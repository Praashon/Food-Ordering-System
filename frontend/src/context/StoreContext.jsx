import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4002";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [userProfile, setUserProfile] = useState(null);

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    } else {
      // Save to localStorage for non-logged users
      const updatedCart = { ...cartItems };
      if (!updatedCart[itemId]) {
        updatedCart[itemId] = 1;
      } else {
        updatedCart[itemId] = updatedCart[itemId] + 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    } else {
      // Save to localStorage for non-logged users
      const updatedCart = { ...cartItems };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] = updatedCart[itemId] - 1;
      } else {
        delete updatedCart[itemId];
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + "/api/food/list");
      if (response.data.success) {
        setFoodList(response.data.data);
      } else {
        console.error("Failed to fetch food list:", response.data.message);
        // Fallback to sample data when API fails
        setFoodList(getSampleFoodData());
      }
    } catch (error) {
      console.error("Error fetching food list:", error);
      // Fallback to sample data when API fails
      setFoodList(getSampleFoodData());
    } finally {
      setLoading(false);
    }
  };

  // Sample food data as fallback
  const getSampleFoodData = () => [
    {
      _id: "sample1",
      name: "Greek Salad",
      image: "food_1.png",
      price: 12,
      description: "Fresh and healthy Greek salad with olives, feta cheese, and vegetables",
      category: "Salad",
      rating: 4.5
    },
    {
      _id: "sample2", 
      name: "Veg Salad",
      image: "food_2.png",
      price: 18,
      description: "Mixed vegetable salad with fresh greens and vinaigrette",
      category: "Salad",
      rating: 4.2
    },
    {
      _id: "sample3",
      name: "Clover Salad", 
      image: "food_3.png",
      price: 16,
      description: "Special clover salad with seasonal vegetables",
      category: "Salad",
      rating: 4.0
    },
    {
      _id: "sample4",
      name: "Chicken Salad",
      image: "food_4.png", 
      price: 24,
      description: "Grilled chicken salad with mixed greens and dressing",
      category: "Salad",
      rating: 4.7
    },
    {
      _id: "sample5",
      name: "Lasagna Rolls",
      image: "food_5.png",
      price: 14,
      description: "Delicious lasagna rolls with cheese and meat sauce",
      category: "Rolls",
      rating: 4.3
    },
    {
      _id: "sample6",
      name: "Peri Peri Rolls", 
      image: "food_6.png",
      price: 12,
      description: "Spicy peri peri rolls with chicken and vegetables",
      category: "Rolls", 
      rating: 4.6
    },
    {
      _id: "sample7",
      name: "Chicken Rolls",
      image: "food_7.png",
      price: 20,
      description: "Classic chicken rolls with herbs and spices",
      category: "Rolls",
      rating: 4.4
    },
    {
      _id: "sample8",
      name: "Veg Rolls",
      image: "food_8.png",
      price: 15,
      description: "Vegetarian rolls packed with fresh vegetables",
      category: "Rolls",
      rating: 4.1
    }
  ];

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    const serverCart = response.data.cartData;
    
    // Merge localStorage cart with server cart
    const localCart = JSON.parse(localStorage.getItem("cartItems") || "{}");
    const mergedCart = { ...serverCart };
    
    // Add local cart items to server cart
    Object.keys(localCart).forEach(itemId => {
      if (mergedCart[itemId]) {
        mergedCart[itemId] += localCart[itemId];
      } else {
        mergedCart[itemId] = localCart[itemId];
      }
    });
    
    setCartItems(mergedCart);
    
    // Clear localStorage after merging
    localStorage.removeItem("cartItems");
    
    // Sync merged cart to server
    if (Object.keys(localCart).length > 0) {
      for (const itemId in localCart) {
        for (let i = 0; i < localCart[itemId]; i++) {
          await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
      }
    }
  };

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get(url + "/api/user/profile", {
        headers: { token }
      });
      if (response.data.success) {
        setUserProfile(response.data.user);
      }
    } catch (error) {
      console.log("Error fetching user profile:", error);
    }
  };

  const clearCart = () => {
    setCartItems({});
    localStorage.removeItem("cartItems");
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      
      // Load cart from localStorage first
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
      
      if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token");
        setToken(token);
        await loadCartData(token);
        await fetchUserProfile(token);
      }
    }

    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    searchQuery,
    setSearchQuery,
    userProfile,
    setUserProfile,
    fetchUserProfile,
    clearCart,
    loading,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
