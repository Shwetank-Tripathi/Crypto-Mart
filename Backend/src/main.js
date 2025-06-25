// Import Express.js framework and json middleware for parsing JSON requests
import express, { json } from "express"
// Import CORS middleware to handle cross-origin requests
import cors from "cors"
// Import Order model for database operations related to orders
import { Order } from "./Models/Orders.js";
// Import Product model for database operations related to products
import { Product } from "./Models/Products.js";
// Import setup function for database initialization
// import { setup } from "./setup.js";
// Import database connection
import { db } from "./db.js";
// Import dotenv for loading environment variables
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create an Express application instance
const app = express();
const PORT = process.env.PORT || 8800;

// Enable CORS for all routes to allow cross-origin requests
app.use(cors());
// Enable JSON parsing middleware to parse incoming JSON requests
app.use(json());

// Custom middleware to log all incoming requests
app.use((req, res) => {
    // Log the HTTP method and URL of each request
    console.log(req.method, req.url);
    // Call next() to continue to the next middleware/route handler
    req.next();
});

// Test database connection
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

// POST endpoint to create a new order
app.post('/makeOrder', async (req, res) => {
    try {
        // Extract order details from request body
        const { productId, deliveryAdderss, transactionAddress, phone } = req.body;
        // Create a new order in the database using the Order model
        await Order.create({ productId, deliveryAdderss, transactionAddress, phone });

        // Set success response variables
        const error = false;
        const message = 'Your Order Has Been Placed, We will reach to you soon!';
        // Send success response with 200 status code
        res.status(200).json({ error, message })
    } catch (err) {
        // Log any errors that occur during order creation
        console.log(err);
        // Extract validation errors from the error object
        let e = err?.errors;
        // Check if the error is a unique constraint violation (duplicate order)
        if (e && e.length > 0 && e[0]?.type == 'unique violation') {
            // Set error response for duplicate order
            const error = true;
            const message = 'Order Already Placed!';
            // Send error response with 200 status code
            res.status(200).json({ error, message });
        } else {
            // Set error response for other types of errors
            const error = true;
            const message = 'failed placing order, Try Again!';
            // Send error response with 500 status code
            res.status(500).json({ error, message });
        }
    }
})

// GET endpoint to retrieve all orders
app.get('/orders', async (req, res) => {
    // Fetch all orders from the database using the Order model
    const orders = await Order.findAll();
    // Send orders data with 200 status code
    res.status(200).json({ orders });
})

// GET endpoint to run database setup
// app.get('/setup', async (req, res) => {
//     // Call the setup function to initialize the database
//     setup();
//     // Set success message
//     const message = 'setup done';
//     // Send success response with 200 status code
//     res.status(200).json({ message });
// })

// GET endpoint to retrieve all products
app.get('/products', async (req, res) => {
    // Fetch all products from the database using the Product model
    const products = await Product.findAll();
    // Send products data with 200 status code
    res.status(200).json({ products });
})

// POST endpoint to create a new product
app.post('/products', async (req, res) => {
    try {
        // Extract product details from request body
        const { name, price, url } = req.body;
        // Create a new product in the database using the Product model
        await Product.create({ name, price, url });

        // Set success response variables
        const error = false;
        const message = 'Product Created Successfully!';
        // Send success response with 200 status code
        res.status(200).json({ error, message });
    } catch (err) {
        // Set error response for any errors during product creation
        const error = true;
        const message = 'Something Went Wrong!';
        // Send error response with 500 status code
        res.status(500).json({ error, message });
    }
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
    // Log that the server is running on localhost with the specified port
    console.log(`listening @ PORT: ${PORT}`);
})