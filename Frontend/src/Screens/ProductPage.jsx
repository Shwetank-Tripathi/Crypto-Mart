import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Spinner } from "@nextui-org/react";
import api from "../Api/Api";

function ProductPage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const prods = await api.getProducts();
    setProducts(prods.products);
  }

  return (!products ?
    <div className="blur-bg min-h-[100vh] flex items-center justify-center">
      <Spinner size={"lg"} label="Fetching Products..." />
    </div>
    :
    <ScrollShadow className="min-h-[100vh] flex blur-bg px-4 md:px-6 lg:px-8 py-20 pb-28">
      <div className="pt-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto">
        {
          products.map(prod => (<ProductCard key={prod.id} id={prod.id} url={prod.url} name={prod.name} price={prod.price} />))
        }
      </div>
    </ScrollShadow>
  );
}

export default ProductPage;
