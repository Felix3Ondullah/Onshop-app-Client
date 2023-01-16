import React, { useState, useEffect } from "react";
import { Table, Input, Pagination } from "antd";

const SearchHistory = () => {
const [searchHistory, setSearchHistory] = useState([]);
const [searchValue, setSearchValue] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(8);

useEffect(() => {
fetchSearchHistory();
}, []);

const fetchSearchHistory = async () => {
try {
const response = await fetch("http://localhost:3007/products");
const data = await response.json();
setSearchHistory(data);
} catch (error) {
console.log(error);
}
};

const handleSearch = (e) => {
setSearchValue(e.target.value);
};

const handlePageChange = (page) => {
setCurrentPage(page);
};

const handlePageSizeChange = (current, size) => {
setPageSize(size);
};

const filteredHistory = searchHistory.filter((history) => {
return history.name.toLowerCase().includes(searchValue.toLowerCase());
});

const paginatedHistory = filteredHistory.slice(
(currentPage - 1) * pageSize,
currentPage * pageSize
);

const columns = [
{
title: "Product Name",
dataIndex: "name",
key: "name",
},
{
title: "Price",
dataIndex: "price",
key: "price",
},
{
  title: "Rating",
  dataIndex: "rating",
  key: "rating",
  },

];

return (
  <div className="mainsection">
<div style={{ marginTop: -90 , width: "95%"}}>
<Input
     placeholder="Search Your History"
     value={searchValue}
     onChange={handleSearch}
   />
<Table
     dataSource={paginatedHistory}
     columns={columns}
     pagination={false}
   />
<Pagination
defaultCurrent={1}
total={filteredHistory.length}
onChange={handlePageChange}
showSizeChanger
onShowSizeChange={handlePageSizeChange}
/>
</div>
</div>
);
};

export default SearchHistory;