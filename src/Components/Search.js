import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input, Select,Pagination } from 'antd';

const { Option } = Select;

function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [filter, setFilter] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3009/products?q=${searchTerm}&sort=${sortBy}&filter=${filter}`
      );
      setProducts(result.data);
    };

    fetchData();
  }, [searchTerm, sortBy, filter, currentPage,]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

    const onChangePage = (page) => {
    if (typeof page === 'string') {
      page = parseFloat(page)
  }
  if (isNaN(page)) {
      console.log('Page is not a number');
      return;
  }
  setCurrentPage(page)
  };

  return (
    <div>
      <Input placeholder="Search for products" onChange={handleSearchChange} />
      <Select
        defaultValue="price"
        style={{ width: 120 }}
        onChange={handleSortChange}
      >
        <Option value="price">Price</Option>
        <Option value="rating">Rating</Option>
      </Select>
      <Select
        defaultValue=""
        style={{ width: 120 }}
        onChange={handleFilterChange}
      >
        <Option value="">All</Option>
        <Option value="asc">Ascending</Option>
        <Option value="dsc">Descending</Option>
    
      </Select>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <Card
            key={product.id}
            cover={<img src={product.image} alt={product.name} />}
            style={{ width: 300, margin: '16px' }}
          >
            <Card.Meta
              title={product.name}
              description={`Price: $${product.price} | Rating: ${product.rating}`}
            />
          </Card>
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={totalPages * 10}
        onChange={onChangePage}
        style={{ margin: "20px 0" }}
      />
    </div>
  );
}

export default Search;
