import ProductCard from "./ProductCard";
import items from "../data/products";
const Product = () => {
  return (
    <>
      <section className="container">
        <h1>Product List</h1>
        <p>Check & Get Your Desired Product!</p>
        <div className="item-container">
          <div className="item-wrapper">
            {items.map((product) => {
              return <ProductCard {...product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
