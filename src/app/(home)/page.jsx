// @ts-ignore
import { Suspense } from "react";
import Footer from "../component/footer/Footer.jsx";
import Header from "../component/header/Header.jsx";
import "./home.css";
import Product from "./Product.jsx";
import loading from "./loading.jsx";
import Loading from "./loading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
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
        <h1 className="recommended" style={{display: "flex" , alignItems: "center" , alignContent:"center"}}>
          <FontAwesomeIcon icon={faCheck} style={{width:"1.5rem" , marginRight: 10}}/>
          Recommended for you
        </h1>
    <Suspense fallback={<Loading/>}>
    <Product/>
    </Suspense>
      </main>
      <Footer />
    </>
  );
}
