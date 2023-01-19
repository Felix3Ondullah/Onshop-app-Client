import React, { useState, useEffect } from "react";
import { Card, Input, Button, Pagination, Select } from "antd";
import "../Css/Search.css";

function Search() {
  const [products, setProducts] = useState([]);
  const [search_term, setSearch_term] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleSearch = () => {
    console.log("=========sasa========")
    fetch('http://127.0.0.1:4000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search_term,
        sortBy,
        sortOrder
      })
    })
      .then((response) => response.json()) 
      .then((data) => setProducts(data));
  }

  //filtering and sorting of products
  useEffect(() => {
    let filteredData = products.filter((product) =>
      product.name.toLowerCase().includes(search_term.toLowerCase())
    );
    if (sortBy === "price") {
      filteredData.sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (sortBy === "rating") {
      filteredData.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    } else if (sortBy === "discount") {
      filteredData.sort((a, b) => (a.discount > b.discount ? 1 : -1));
    }

    if (sortOrder === "ascending") {
      filteredData.sort((a, b) => (a.ascending > b.ascending ? 1 : -1));
    } else if (sortOrder === "descending") {
      filteredData.sort((a, b) => (a.descending > b.descending ? 1 : -1));
    }
    setFilteredProducts(filteredData);
  }, [search_term, sortBy, sortOrder, products]);

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
    <div className="mainsection">
      <div style={{ display: "flex", flexWrap: "wrap", margin: "95px" }}>
        <form
          style={{ margin: "30px 400px" }}
          onSubmit={(event) => event.preventDefault()}
        >
          <Input
            placeholder="Search Products Here"
            allowClear
            style={{
              width: 500,
            }}
            size="large"
            value={search_term}
            onChange={(event) => setSearch_term(event.target.value)}
          />
          <Button type="primary" htmlType="submit" onClick={handleSearch}   size="large">
            Search Product
          </Button>
          <Button onClick={() => setSearch_term("")} size="large">
            Clear Search
          </Button>
          <div style={{ margin: "7px" }}>
            <Select
              size="large"
              defaultValue="price"
              onChange={handleSortChange}
            >
              <Select.Option value="price">Compare by Price</Select.Option>
              <Select.Option value="rating">Compare by Rating</Select.Option>
              <Select.Option value="discount">
                Compare by Discount
              </Select.Option>
            </Select>
            <Select
              size="large"
              defaultValue="ascending"
              onChange={handleOrderChange}
            >
              <Select.Option value="ascending">
                Compare From The Lowest
              </Select.Option>
              <Select.Option value="decending">
                Compare From The Highest{" "}
              </Select.Option>
            </Select>
          </div>
        </form>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "70px" }}>
          {currentProducts.map((product) => (
            <Card
              
              key={product.id}
              cover={<img className="product-image"  src={product.image_url} alt={product.name} />}
              actions={[
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  Visit Site
                </a>
              ]}
              style={{ width: 250, margin: "20px" }}
              title={product.shop}
            >
              <Card.Meta
                title={product.name}
                description={`Price: ${product.price} | Rating: ${product.rating}  `}
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
    </div>
  );
}

export default Search;
