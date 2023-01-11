import { useState, useEffect } from "react";

function Search() {
  const [ProductList, setProductList] = useState();

  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then((response) => response.json())
      .then((result) => setProductList(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col"> Image</th>
            <th scope="col">Product</th>
            <th scope="col"> Price</th>
            <th scope="col"> Rating</th>
          </tr>
        </thead>

        {ProductList && ProductList.length > 0
          ? ProductList.map((product) => (
              <tbody>
                <tr>
                  <td>{product.img}</td>
                  <td>{product.product}</td>
                  <td>{product.price}</td>
                  <td>{product.rating}</td>
                </tr>
              </tbody>
            ))
          : "Loading"}
      </table>
    </div>
  );
}

export default Search;
