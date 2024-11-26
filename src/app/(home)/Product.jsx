import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import notFound from "app/not-found";
import Image from 'next/image';
import Link from "next/link";
import React from "react";

async function getProducts() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const res = await fetch("http:localhost:4000/products", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
export default async function Product() {
  const products =await getProducts();

  return (
    <div>
      <section className="products flex">
        {products.map((item) => {
          return (
            <article title={item.title} key={item.id} className="card">
              <Link href={`/product-details/${item.id}`}>
               <Image width={266} height={400} src={item.productImg} alt=""/>
              </Link>
              <div style={{ width: 266 }} className="content">
                <h1 className="title">{item.title.slice(0, 15)} ...</h1>
                <p className="description">
                  {/* {item.description.slice(0, 111)} ... */}
                </p>
                <div
                  className="flex"
                  style={{
                    justifyContent: "space-between",
                    paddingBottom: "0.7rem",
                  }}
                >
                  <div className="price">{item.price}</div>
                  <button className="add-to-cart flex">
                     <FontAwesomeIcon icon={faCartPlus} style={{width:"1.1rem"}}/>
                    Add To Cart
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
