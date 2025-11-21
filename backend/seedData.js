import mongoose from 'mongoose';
import foodModel from './models/foodModel.js';
import 'dotenv/config';

// Sample food data (50 items) with Nepali/Indian cuisine focus
const sampleFoodData = [
  // Rice & Dal
  { name: "Dal Bhat", description: "Traditional Nepali meal with lentil soup and steamed rice", price: 150, category: "Rice", image: "dalbhat.jpg" },
  { name: "Jeera Rice", description: "Fragrant basmati rice cooked with cumin seeds", price: 120, category: "Rice", image: "jeera_rice.jpg" },
  { name: "Chicken Biryani", description: "Aromatic basmati rice cooked with spiced chicken", price: 280, category: "Rice", image: "chicken_biryani.jpg" },
  { name: "Vegetable Pulao", description: "Mixed vegetable rice with aromatic spices", price: 180, category: "Rice", image: "veg_pulao.jpg" },
  { name: "Mutton Biryani", description: "Premium mutton cooked with fragrant basmati rice", price: 350, category: "Rice", image: "mutton_biryani.jpg" },

  // Momos
  { name: "Chicken Momo", description: "Steamed dumplings filled with spiced chicken", price: 160, category: "Momo", image: "chicken_momo.jpg" },
  { name: "Vegetable Momo", description: "Healthy steamed dumplings with mixed vegetables", price: 140, category: "Momo", image: "veg_momo.jpg" },
  { name: "Buff Momo", description: "Traditional buffalo meat dumplings", price: 170, category: "Momo", image: "buff_momo.jpg" },
  { name: "Fried Chicken Momo", description: "Crispy fried chicken dumplings", price: 180, category: "Momo", image: "fried_chicken_momo.jpg" },
  { name: "Cheese Momo", description: "Creamy cheese-filled steamed dumplings", price: 190, category: "Momo", image: "cheese_momo.jpg" },
  { name: "Paneer Momo", description: "Cottage cheese dumplings with aromatic spices", price: 170, category: "Momo", image: "paneer_momo.jpg" },
  { name: "Jhol Momo", description: "Momo served in spicy tomato-based soup", price: 200, category: "Momo", image: "jhol_momo.jpg" },

  // Noodles
  { name: "Chicken Chow Mein", description: "Stir-fried noodles with chicken and vegetables", price: 180, category: "Noodles", image: "chicken_chowmein.jpg" },
  { name: "Vegetable Chow Mein", description: "Healthy stir-fried noodles with mixed vegetables", price: 150, category: "Noodles", image: "veg_chowmein.jpg" },
  { name: "Buff Chow Mein", description: "Spicy buffalo meat noodles", price: 190, category: "Noodles", image: "buff_chowmein.jpg" },
  { name: "Egg Noodles", description: "Simple egg noodles with vegetables", price: 140, category: "Noodles", image: "egg_noodles.jpg" },
  { name: "Hakka Noodles", description: "Indo-Chinese style stir-fried noodles", price: 160, category: "Noodles", image: "hakka_noodles.jpg" },
  { name: "Schezwan Noodles", description: "Spicy Schezwan sauce noodles", price: 170, category: "Noodles", image: "schezwan_noodles.jpg" },

  // Curry
  { name: "Chicken Curry", description: "Traditional spiced chicken curry", price: 220, category: "Curry", image: "chicken_curry.jpg" },
  { name: "Mutton Curry", description: "Rich and flavorful mutton curry", price: 280, category: "Curry", image: "mutton_curry.jpg" },
  { name: "Dal Tadka", description: "Yellow lentils tempered with spices", price: 120, category: "Curry", image: "dal_tadka.jpg" },
  { name: "Paneer Butter Masala", description: "Cottage cheese in creamy tomato gravy", price: 200, category: "Curry", image: "paneer_butter_masala.jpg" },
  { name: "Aloo Gobi", description: "Potato and cauliflower curry", price: 140, category: "Curry", image: "aloo_gobi.jpg" },
  { name: "Palak Paneer", description: "Cottage cheese in spinach gravy", price: 180, category: "Curry", image: "palak_paneer.jpg" },
  { name: "Rajma", description: "Red kidney beans in spiced tomato gravy", price: 160, category: "Curry", image: "rajma.jpg" },
  { name: "Chole", description: "Spiced chickpea curry", price: 150, category: "Curry", image: "chole.jpg" },

  // Roti & Bread
  { name: "Roti", description: "Traditional wheat flatbread", price: 15, category: "Roti", image: "roti.jpg" },
  { name: "Naan", description: "Soft leavened bread baked in tandoor", price: 35, category: "Roti", image: "naan.jpg" },
  { name: "Garlic Naan", description: "Naan topped with garlic and herbs", price: 45, category: "Roti", image: "garlic_naan.jpg" },
  { name: "Butter Naan", description: "Soft naan brushed with butter", price: 40, category: "Roti", image: "butter_naan.jpg" },
  { name: "Paratha", description: "Layered wheat flatbread", price: 25, category: "Roti", image: "paratha.jpg" },
  { name: "Aloo Paratha", description: "Stuffed bread with spiced potatoes", price: 50, category: "Roti", image: "aloo_paratha.jpg" },

  // Snacks
  { name: "Samosa", description: "Crispy triangular pastry with spiced filling", price: 25, category: "Snacks", image: "samosa.jpg" },
  { name: "Pakoda", description: "Deep-fried vegetable fritters", price: 80, category: "Snacks", image: "pakoda.jpg" },
  { name: "Chana Chaat", description: "Spicy chickpea street food", price: 60, category: "Snacks", image: "chana_chaat.jpg" },
  { name: "Aloo Chop", description: "Spiced potato patties", price: 30, category: "Snacks", image: "aloo_chop.jpg" },
  { name: "Sel Roti", description: "Traditional Nepali ring-shaped bread", price: 20, category: "Snacks", image: "sel_roti.jpg" },
  { name: "Bara", description: "Black lentil pancake", price: 35, category: "Snacks", image: "bara.jpg" },

  // Drinks
  { name: "Masala Chai", description: "Spiced tea with milk", price: 25, category: "Drinks", image: "masala_chai.jpg" },
  { name: "Lassi", description: "Traditional yogurt-based drink", price: 60, category: "Drinks", image: "lassi.jpg" },
  { name: "Mango Lassi", description: "Sweet mango yogurt drink", price: 80, category: "Drinks", image: "mango_lassi.jpg" },
  { name: "Fresh Lime Soda", description: "Refreshing lime and soda water", price: 50, category: "Drinks", image: "lime_soda.jpg" },
  { name: "Coffee", description: "Hot brewed coffee", price: 40, category: "Drinks", image: "coffee.jpg" },
  { name: "Cold Coffee", description: "Iced coffee with milk", price: 70, category: "Drinks", image: "cold_coffee.jpg" },

  // Desserts
  { name: "Gulab Jamun", description: "Sweet milk dumplings in sugar syrup", price: 60, category: "Desserts", image: "gulab_jamun.jpg" },
  { name: "Rasgulla", description: "Spongy cottage cheese balls in syrup", price: 50, category: "Desserts", image: "rasgulla.jpg" },
  { name: "Kheer", description: "Rice pudding with milk and dry fruits", price: 70, category: "Desserts", image: "kheer.jpg" },
  { name: "Jalebi", description: "Crispy sweet spirals in sugar syrup", price: 80, category: "Desserts", image: "jalebi.jpg" },
  { name: "Kulfi", description: "Traditional frozen dessert", price: 50, category: "Desserts", image: "kulfi.jpg" },
  { name: "Barfi", description: "Milk-based sweet squares", price: 100, category: "Desserts", image: "barfi.jpg" },

  // Special Items
  { name: "Thali Set", description: "Complete meal with rice, dal, curry, and sides", price: 250, category: "Rice", image: "thali.jpg" },
  { name: "Mixed Grill", description: "Assorted grilled meats and vegetables", price: 350, category: "Snacks", image: "mixed_grill.jpg" },
  { name: "Nepali Khana Set", description: "Traditional Nepali meal set", price: 200, category: "Rice", image: "nepali_khana_set.jpg" }
];

const seedDatabase = async () => {
  try {
    // Connect to database
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://foodboyprashon:Admin002@newcluster0.ocg5qag.mongodb.net/food-ordering-project?retryWrites=true&w=majority&appName=NewCluster0';
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB Atlas!");

    // Clear existing food data
    await foodModel.deleteMany({});
    console.log("🗑️ Cleared existing food data");

    // Insert sample data
    await foodModel.insertMany(sampleFoodData);
    console.log("✅ Successfully added 50 food items!");

    // Verify data
    const count = await foodModel.countDocuments();
    console.log(`📊 Total food items in database: ${count}`);

    // Display categories
    const categories = await foodModel.distinct('category');
    console.log("📂 Available categories:", categories);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
