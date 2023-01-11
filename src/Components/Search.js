import { useState, useEffect } from "react";

function Search() {
  const [ProductList,setProductList] = useState();
  useEffect(() => {
    fetch("http://localhost:3005/products")
      .then((response) => response.json())
      .then(result=>setProductList(result))
      .catch((error) => console.log(error));
  }, []);

  return <div>
    <table>
      <tr>
        <th>Image</th>
        <th>Product</th>
        <th>Price</th>
        <th>Rating</th>
      </tr>
      {
        ProductList && ProductList.length> 0 ?
        ProductList.map(product =>
    <tr>
      <td>{product.img}</td>
      <td>{product.product}</td>
      <td>{product.price}</td>
      <td>{product.rating}</td>
    </tr>
    )
      :'Loading'
      }
    </table>

  </div>;
}

export default Search;
