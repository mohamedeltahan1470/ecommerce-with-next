import Footer from "../component/footer/Footer.jsx";
import Header from "../component/header/Header.jsx";
import "./home.css";
import Product from "./Product.jsx";

export default function Home() {
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>
      <main className="">
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you
        </h1>
        <Product />
      </main>
      <Footer />
    </>
  );
}
