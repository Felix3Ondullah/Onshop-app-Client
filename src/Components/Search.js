import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Pagination, Select } from 'antd';

function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    fetch('http://localhost:3005/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    let filteredData = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sortBy === 'price') {
      filteredData.sort((a, b) => (a.price > b.price) ? 1 : -1);
    } else if (sortBy === 'rating') {
      filteredData.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
    }
    setFilteredProducts(filteredData);
  }, [searchTerm, sortBy, products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const handleSortChange = (value) => {
    setSortBy(value);
  }

  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <Input
          placeholder="Search Products"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <Button type="primary" htmlType="submit">Search</Button>
        <Button onClick={() => setSearchTerm('')}>Clear</Button>
        <Select defaultValue="price" onChange={handleSortChange}>
          <Select.Option value="price">Sort by Price</Select.Option>
          <Select.Option value="rating">Sort by Rating</Select.Option>
        </Select>
      </form>
  <div style={{ display: "flex", flexWrap: "wrap" }}>>
      {currentProducts.map(product => (
        <Card
          key={product.id}
          cover={<img src={product.image} alt={product.name} />}
          style={{ width: 300, margin: "16px" }}
          title={product.name}
        >
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
        </Card>
      ))}
      </div>
      <Pagination 
        defaultCurrent={1}
        total={totalPages}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Search
