// import { useEffect, useState } from "react";
// import axios from "axios";
// import BootstrapTable from "react-bootstrap-table-next";
// import "bootstrap/dist/css/bootstrap.min.css";
// import paginationFactory from "react-bootstrap-table2-paginator";
// import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

// function Search() {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     getData();
//   }, []);
//   const getData = () => {
//     axios("http://localhost:3004/products").then((res) => setProduct(res.data));
//     // console.log(res.data)
//   };
//   const columns = [
//     { dataField: "product", text: "Product", sort: true, filter: textFilter() },
//     { dataField: "price", text: "Price", sort: true, filter: textFilter() },
//     { dataField: "rating", text: "Rating", sort: true, filter: textFilter() },
//     // {dataField="image" dataFormat={imageFormatter}}
//   ];

//   return (
//     <div>
//       <BootstrapTable
//         bootstrap7
//         keyField="id"
//         data={product}
//         columns={columns}
//         pagination={paginationFactory()}
//         filter={filterFactory()}
//       />
//     </div>
//   );
// }

// export default Search;

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  card: {
    maxWidth: 400,
  },
  search: {
    textAlign: 'center',
  },
  media: {
    height: 300,
  },
}));

export default function Search() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:3005/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={classes.root}>
      <TextField
        id="search"
        label="Search"
        type="search"
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Rating: {product.rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
