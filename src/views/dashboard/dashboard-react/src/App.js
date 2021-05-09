import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./containers/products/Products";
import Categories from "./containers/categories/Categories";
import Users from "./containers/users/Users";

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="intro-products">
            <h2>
              Es hora de tomar un break
              <i className="far fa-smile-wink"></i>
            </h2>
          </div>
        </section>
        <div className="product-products container">
          <Products />
          <Categories />
          <Users />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
