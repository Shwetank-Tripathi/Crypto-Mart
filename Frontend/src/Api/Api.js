// API class for making HTTP requests to the backend server
    class Api {
        // Constructor that accepts a URL parameter to set the base URL
        constructor(url) {
            // Set the private URL field to the provided URL
            this.baseUrl = url;
        }
        // Method to fetch all products from the backend
        async getProducts() {
            // Make a GET request to the products endpoint and return JSON response
            return await fetch(`${this.baseUrl}/products`).then(r => r.json());
        }
        // Method to create a new order with the provided details
        async makeOrder(productId, deliveryAdderss, transactionAddress, phone) {
            // Convert the order data to JSON string for the request body
            const body = JSON.stringify({ productId, deliveryAdderss, transactionAddress, phone });
            // Make a POST request to the makeOrder endpoint
            const res = await fetch(`${this.baseUrl}/makeOrder`, {
                // Specify the HTTP method as POST
                method: "POST",
                // Set headers for JSON content type
                headers: {
                    'content-type': 'application/json',
                },
                // Include the order data in the request body
                body,
            }).then(r => r.json()); // Parse the response as JSON

            // Return the response from the server
            return res;
        }
    }


const api = new Api(import.meta.env.VITE_BACKEND_URL);

export default api;