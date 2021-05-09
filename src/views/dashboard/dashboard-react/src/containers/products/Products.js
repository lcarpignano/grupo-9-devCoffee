import React, { Component } from "react";
import TotalProducts from "../../components/totalProducts/TotalProducts";
import LastProduct from "../../components/lastProduct/LastProduct";
import ProductsCategory from "../../components/productsCategory/ProductsCategory";
import ProductsList from "../../components/productsList/ProductsList";

const API = "http://localhost:3030/apiproducts/";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalProducts: null,
      lastProduct: null,
      productsCategory: null,
      productsList: null,
    };
  }

  productsByCategory(arrOfProducts) {
    let ids = [
      {
        id: 1,
        name: "Coffee",
        total: 0,
      },
      {
        id: 2,
        name: "Tea",
        total: 0,
      },
    ];
    /* Hacerlo con solo 2 cat, coffe y thea */
    /*  */
    arrOfProducts.forEach((element) => {
      if (element.category_id === 1) {
        ids[0].total++;
      }
      if (element.category_id === 2) {
        ids[1].total++;
      }
    });
    return ids;
  }

  theLastProduct(arr) {
    let ids = Math.max(...arr.map((product) => product.id));
    return arr.find((element) => element.id === ids);
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((body) => {
        this.setState({
          totalProducts: body.meta.totalProducts,
          lastProduct: this.theLastProduct(body.data),
          productsCategory: this.productsByCategory(body.data),
          productsList: body.data,
        });
        console.log("este es el BOdy.DATA", body.data);
      });
  }

  render() {
    const {
      totalProducts,
      lastProduct,
      productsCategory,
      productsList,
    } = this.state;


    console.log(" productos listados", productsList);

    
    return (
      <>
        {totalProducts && <TotalProducts total={totalProducts} />}
        {lastProduct && <LastProduct props={lastProduct} />}
        {productsCategory && <ProductsCategory props={productsCategory} />}
        {productsList && <ProductsList props={productsList} />}
      </>
    );
  }
}
