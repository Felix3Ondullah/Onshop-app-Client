import { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";


function Search() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios("http://localhost:3004/products").then((res) => setProduct(res.data));
    // console.log(res.data)
  };
  const columns = [
    { dataField: "product", text: "Product", sort: true },
    { dataField: "price", text: "Price", sort: true },
    { dataField: "rating", text: "Rating", sort: true },
  ];



  return (
    <div>
      <BootstrapTable bootstrap7  keyField="id" data={product} columns={columns}
        pagination={paginationFactory()}  />
    </div>
  );
}

export default Search;
