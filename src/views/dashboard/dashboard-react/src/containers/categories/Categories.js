import React, { Component } from "react";
import TotalCategories from "../../components/totalCategories/TotalCategories";


const API = "http://localhost:3030/apiproducts/categories";

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCategories: null,
      
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((body) => {
        this.setState({
            totalCategories: body.meta.totalCategories,
        });
        
      });
  }

  render() {
    const {
        totalCategories
    } = this.state;

    
    return (
      <>
        {totalCategories && <TotalCategories total={totalCategories} />}
      </>
    );
  }
}
