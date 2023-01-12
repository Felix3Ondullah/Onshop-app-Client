import React, { useState } from 'react';
import axios from 'axios';
import { Card, Input, Button, Pagination,Select } from 'antd';


function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('price');
  const [sortOrder, setSortOrder] = useState('asc');
  
  // useEffect(() => {
  //   fetchData();
  // }, [searchTerm, sortBy, sortOrder, currentPage]);
  
  const fetchData = async () => {
    try {
        const response = await axios.get(`http://localhost:3006/products`, {
          params: {
            search: searchTerm,
            page: currentPage,
            sortBy: sortBy,
           sortOrder: sortOrder,
          }
        });
        setProducts(response.data.data);
        setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleOrderChange = (value) => {
    setSortOrder(value);
  };

  const onChangePage = (page) => {
    setCurrentPage(page);
    fetchData();
  };

  return (
    <div>
      <Input placeholder="Search for products" onChange={(e) => setSearchTerm(e.target.value)} />
      <Button type="primary" onClick={handleSearch}>Search</Button>

      <div style={{ margin: '16px 0' }}>
        <Select
          defaultValue="price"
          onChange={handleSortChange}
          style={{ width: 120, marginRight: '16px' }}
        >
          <Select.Option value="price">Price</Select.Option>
          <Select.Option value="rating">Rating</Select.Option>
          <Select.Option value="name">Name</Select.Option>
        </Select>
        <Select
          defaultValue="asc"
          onChange={handleOrderChange}
          style={{ width: 120 }}
        >
          <Select.Option value="asc">Ascending</Select.Option>
          <Select.Option value="desc">Descending</Select.Option>
        </Select>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <Card
            key={product.id}
            style={{ width: 300, margin: '16px' }}
            cover={<img alt={product.name} src={product.image} />}
          >
            <Card.Meta
              title={product.name}
              description={`Price: ${product.price} | Rating: ${product.rating}`}
            />
          </Card>
        ))}
      </div>
      <Pagination defaultCurrent={1} current={currentPage} total={totalPages * 10} onChange={onChangePage} style={{ margin: "20px 0" }} />
    </div>
  );
}

export default Search;
