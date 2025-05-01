import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "Hp Probook 450 G5",
    price: "51000",
  },
  {
    id: 2,
    name: "Hp EliteBook 845 G8",
    price: "42000",
  },
  {
    id: 3,
    name: "Dell Latitude 3420",
    price: "30000",
  },
];
const Product = () => {
  return (
    <>
      <section>
        <h1>Product List</h1>
        <p>Check & Get Your Desired Product!</p>
        <div>
          {products.map((product) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Product;
