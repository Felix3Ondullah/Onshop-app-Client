import React, { useState, useEffect } from "react";
import { Card, Input, Button, Pagination, Select,Spin } from "antd";
import "../Css/Search.css";
import axios from "axios";

function Search() {
  const [products, setProducts] = useState([]);
  const [search_term, setSearch_term] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [loading, setLoading] = useState(false);


  const handleSearch = () => {
    setLoading(false);
    axios
      .post("https://onshop-qdh1.onrender.com/search", {
        search_term,
        sortBy,
        sortOrder,
      })
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  //filtering and sorting of products
  useEffect(() => {
    if (!products) return;
    let filteredData = products.filter((product) => {
      if (product && product.name)
        return product.name.toLowerCase().includes(search_term.toLowerCase());
      return false;
    });
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
    <div className={loading ? 'hidden' : 'content'}>
    <div className="mainsection">
          {loading && (
            <Spin size="large" tip="Loading..." style={{ margin: 'auto' }} />
        )}
      <div style={{ display: "flex", flexWrap: "wrap", margin: "95px" }}>
        <form
          style={{ margin: "1px 300px" }}
          onSubmit={(event) => event.preventDefault()}
        >
          <Input
            placeholder="Search Products Here"
            allowClear
            style={{ width: 700 }}
            size="large"
            value={search_term}
            onChange={(event) => setSearch_term(event.target.value)}
          />
          <div style={{ margin: "5px" }}></div>
          <Button type="primary" onClick={handleSearch}>
            Search Product
          </Button>

          <Button
            onClick={() => {
              setSearch_term("");
              setFilteredProducts([]);
            }}
          >
            Clear Search
          </Button>
          <div style={{ margin: "5px" }}>
            <Select defaultValue="price" onChange={handleSortChange}>
              <Select.Option value="price">Compare by Price</Select.Option>
              <Select.Option value="rating">Compare by Rating</Select.Option>
              
            </Select >
            <Select defaultValue="ascending" onChange={handleOrderChange}>
              <Select.Option value="ascending">
                Compare From The Highest
              </Select.Option>
              <Select.Option value="decending">
                Compare From The Lowest{" "}
              </Select.Option>
            </Select>
          </div>
        </form>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "50px" }}>
          {currentProducts.map((product) => (
            <Card
              key={product.id}
              cover={
                <img
                  className="product-image"
                  src={product.image_url}
                  alt={product.name}
                />
              }
              actions={[
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>,
              ]}
              style={{ width: 250, margin: "20px" }}
              title={product.shop}
            >
              <Card.Meta
                // title={product.name}
                description={`Price: Ksh ${product.price} | Rating: ${product.rating}  `}
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
    </div>
    
  );
}

export default Search;
