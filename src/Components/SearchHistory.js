import React, { useState, useEffect } from 'react';
import { Table, Input, Button } from 'antd';

const SearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://endpoint/user/search-history')
      .then(res => res.json())
      .then(data => setSearchHistory(data))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = () => {

    fetch(`https://api.example.com/user/search-history?term=${searchTerm}`)
      .then(res => res.json())
      .then(data => setSearchHistory(data))
      .catch(err => console.error(err));
    
  }

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Search Date',
      dataIndex: 'searchDate',
      key: 'searchDate',
    },
  ];

  return (
    <div>
      <Input placeholder="Search for a specific term" onChange={e => setSearchTerm(e.target.value)} />
      <Button onClick={handleSearch}>Search</Button>
      <Table dataSource={searchHistory} columns={columns} />
    </div>
  );
}

export default SearchHistory;