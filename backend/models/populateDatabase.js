
const Product = require('./product');
const allProducts = require('./data/all_product');

const populateDatabase = async () => {
  try {
   // Connect to the database

    // Clear the existing collection
    await Product.deleteMany();

    // Insert the product data
    await Product.insertMany(allProducts);
    console.log('Database populated successfully!');

    process.exit();
  } catch (error) {
    console.error('Error populating database:', error);
    process.exit(1);
  }
};

populateDatabase();
