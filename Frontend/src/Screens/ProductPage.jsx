// Import React hooks for managing component state and side effects
import { useEffect, useState } from "react";
// Import ProductCard component for displaying individual products
import ProductCard from "../components/ProductCard";
// Import ScrollShadow component for scrollable content with shadow effect
import { ScrollShadow } from "@nextui-org/scroll-shadow";
// Import Spinner component for loading state
import { Spinner } from "@nextui-org/react";
// Import API instance for making backend requests
import api from "../Api/Api";

// ProductPage component for displaying all available products
function ProductPage() {
  // State to store the list of products from the backend
  const [products, setProducts] = useState(null);

  // Effect to fetch products when component mounts
  useEffect(() => {
    // Call the function to fetch products from the API
    fetchProducts();
  }, []);

  // Function to fetch products from the backend API
  const fetchProducts = async () => {
    // Make API call to get products
    const prods = await api.getProducts();
    // Commented out console log for debugging
    // console.log(prods);
    // Set the products state with the fetched data
    setProducts(prods.products);
  }

  // Return loading spinner if products are not yet loaded, otherwise return products grid
  return (!products ?
    // Loading container with blur background
    <div className="blur-bg min-h-[100vh] flex items-center justify-center">
      {/* Large spinner with loading text */}
      <Spinner size={"lg"} label="Fetching Products..." />
    </div>
    :
    // Main products container with scroll shadow and blur background
    <ScrollShadow className="min-h-[100vh] flex blur-bg px-4 md:px-6 lg:px-8 py-20 pb-28">
      {/* Grid container for products with responsive columns */}
      <div className="pt-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto">
        {
          // Map through products array and render ProductCard for each product
          products.map(prod => (<ProductCard key={prod.id} id={prod.id} url={prod.url} name={prod.name} price={prod.price} />))
        }
      </div>
    </ScrollShadow>
  );
}

// Export the ProductPage component as the default export
export default ProductPage;
