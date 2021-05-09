import React, { Component } from "react";
import TotalUsers from "../../components/totalUsers/TotalUsers";


const API = "http://localhost:3030/apiusers/index";

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalUsers: null,
      
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((body) => {
        this.setState({
          totalUsers: body.meta.totalUsers,
        });
        
      });
  }

  render() {
    const {
      totalUsers
    } = this.state;

    
    return (
      <>
        {TotalUsers && <TotalUsers total={totalUsers} />}
      </>
    );
  }
}
