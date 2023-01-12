import React, { useState, useEffect } from "react";
import { Card, Input, Button, Pagination, Select } from "antd";

function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    fetch("http://localhost:3005/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  //filtering and sorting of products
  useEffect(() => {
    let filteredData = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortBy === "price") {
      filteredData.sort((a, b) => (a.price > b.price ? 1 : -1));
    }  else if (sortBy === "rating") {
      filteredData.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    }

    if (sortOrder === "ascending") {
      filteredData.sort((a, b) => (a.ascending > b.ascending? 1 : -1));
    } else if (sortOrder === "descending") {
      filteredData.sort((a, b) => (a.descending > b.descending ? 1 : -1));
    } 
    setFilteredProducts(filteredData);
  }, [searchTerm, sortBy,sortOrder, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };
  const handleOrderChange = (value) => {
    setSortOrder(value);
  };

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <Input
          placeholder="Search Products Here"
          allowClear
          style={{
            width: 300,
          }}
          size="large"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Button type="primary" htmlType="submit"  size="large">
          Search Product 
        </Button>
        <Button onClick={() => setSearchTerm("")}  size="large">Clear</Button>
        <div style={{ margin: "16px 0" }}>
          <Select defaultValue="price" onChange={handleSortChange}>
            <Select.Option value="price">Compare by Price</Select.Option>
            <Select.Option value="rating">Comapre by Rating</Select.Option>
          </Select>
          <Select defaultValue="ascending" onChange={handleOrderChange}>
            <Select.Option value="ascending">
              Compare by Ascending Order
            </Select.Option>
            <Select.Option value="decending">
              Compare by Decending Order{" "}
            </Select.Option>
          </Select>
        </div>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            cover={<img src={product.image} alt={product.name} />}
            style={{ width: 250, margin: "16px" }}
            title={product.shop}
          >
            <Card.Meta
              title={product.name}
              description={`Price: ${product.price} | Rating: ${product.rating}`}
            />
            {/* <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p> */}
          </Card>
        ))}
      </div>
       <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={totalPages * 10}
        onChange={handlePageChange}
        style={{ margin: "20px 0" }}
      
      />
    </div>
  );
}

export default Search;
