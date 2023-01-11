import { useState, useEffect } from "react";

function Search() {
  const [ProductList,setProductList] = useState();
  useEffect(() => {
    fetch("http://localhost:3005/products")
      .then((response) => response.json())
      .then(result=>setProductList(result))
      .catch((error) => console.log(error));
  }, []);

  return <div>Search Products</div>;
}

export default Search;
