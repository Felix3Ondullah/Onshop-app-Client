import { useEffect, useState } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory,{textFilter} from "react-bootstrap-table2-filter";


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
    { dataField: "product", text: "Product", sort: true, filter:textFilter() },
    { dataField: "price", text: "Price", sort: true, filter:textFilter() },
    { dataField: "rating", text: "Rating", sort: true, filter:textFilter()},
  ];



  return (
    <div>
      <BootstrapTable bootstrap7  keyField="id" data={product} columns={columns}
        pagination={paginationFactory()} 
        filter ={filterFactory()} />
    </div>
  );
}

export default Search;
