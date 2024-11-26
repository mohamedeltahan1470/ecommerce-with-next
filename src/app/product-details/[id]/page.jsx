import Footer from 'app/component/footer/Footer';
import Header from 'app/component/header/Header';
import {Inter} from 'next/font/google'
import "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { notFound } from 'next/navigation';
import Image from 'next/image';
const handle = Inter({
  subsets: ['latin']
})

export async function generateMetadata({ params }) {
  const obj = await getProducts({params});
  return {
    title: obj.title,
    description: obj.description,
    icons:{
      icon: "./images/bag-shopping-solid.svg"
    }
  }
}
async function getProducts({params}) {

  const res = await fetch(`http://localhost:4000/products/${params.id}`);

console.log(res)
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

 export  default async function page({params}) {
const obj = await getProducts({params});
console.log(obj)
  return (
    <div className={handle.className}    style={{
      height:" 100vh",
      display:" grid",
      alignItems: "center",
      gridTemplateRows: "auto 1fr auto",
    }}>
       <Header/>
       <main style={{ textAlign: "center" }} className="flex">
     <Image width={266} height={300} alt="" src={`${obj.productImg}`}/>
  <div className="product-details">
    <div style={{ justifyContent: "space-between" }} className="flex">
      <h2>{obj.title}</h2>
      <p className="price">{obj.price}</p>
    </div>
    <p className="description">
      {obj.description}
    </p>
    <button className="flex add-to-cart">
      <i className="fa-solid fa-cart-plus" />
      <FontAwesomeIcon icon={faCartPlus} style={{width:"1.1rem"}}/>
      Add To Cart
    </button>
  </div>
</main>

        <Footer/>
    </div>
  )
}
