import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Navbar from "../components/Navbar";



function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {products && <ProductsList products={products}/>}
    </>
  );
}

export default Home;
