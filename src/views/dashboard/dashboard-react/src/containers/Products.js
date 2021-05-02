import fetch from "node-fetch";
import React, { Component } from "react";

const API = "http://localhost:3030/products/";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProducts: null,
      lastProduct: null,
      productsCategory: null,
      products: null,
    };
  }

  productsByCategory(arrOfProducts) {
    let ids = [];
    arrOfProducts.forEach((element) => {
      if (ids.find((category) => category.id === element.category_id)) {
        element.total++;
      } else {
        ids.push({
          id: element.category_id,
          total: 1,
        });
      }
    });
    return ids;
  }

  theLastProduct(arr) {
    return arr.filter(
      (element) => element.id === Math.max(arr.map((product) => product.id))
    );
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((body) => {
        this.setState({
          totalProducts: body.meta.totalProducts,
          lastProduct: this.theLastProduct(body.data),
          productsCategory: this.productsByCategory(body.data),
          products: body.data,
        });
      });
  }

  render() {
    const {
      totalProducts,
      lastProduct,
      productsCategory,
      products,
    } = this.state;
    return (
      <>
        {totalProducts && <> </>}
        {lastProduct && <> </>}
        {productsCategory && <> </>}
        {products && <> </>}
      </>
    );
  }
}
