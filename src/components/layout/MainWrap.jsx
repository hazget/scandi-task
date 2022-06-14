import React, { Component } from "react";
import ProductListingPage from "../../pages/ProductListingPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import ProductDescriptionPage from "../../pages/ProductDescriptionPage";
import CartPage from "../../pages/CartPage";
import Footer from "./Footer";
import withParams from "../withParams";

const MainContainer = styled.main`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`

const ProductsContainer = styled.div`
  width: 85%;
  min-height: 700px;
`

class MainWrap extends Component {
  render() {
    if (this.props.allData) {
      return (
        <Router>
          <Navbar data={this.props.allData} />
          <MainContainer id="main">
            <ProductsContainer>
              <Routes>
                {this.props.allData.categories.map(category => {
                  return <Route key={Math.random()} path={`${category.name}`} element={<ProductListingPage data={category.products} category={`${category.name}`} />} />
                })}
                <Route path="/product/:id" element={<ProductDescriptionPage data={this.props.allData.categories[0].products} />} />
                <Route path="/cart" element={<CartPage data={this.props.allData} />} />
                <Route path="*" element={<Navigate to="/all" replace />} />
              </Routes>
            </ProductsContainer>
          </MainContainer>
          <Footer />
        </Router>
      );
    }
  }
};

export default withParams(MainWrap, []);