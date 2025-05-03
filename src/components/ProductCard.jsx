const ProductCard = ({ name, regular_price, sale_price, image }) => {
  return (
    <div className="item">
      <div className="item-inner">
        <div className="label"></div>
        <div className="item-img">
          <a href="#">
            <img src={image} alt={name} />
          </a>
        </div>
        <div className="item-details">
          <h4 className="item-name">{name}</h4>
          <div className="item-price">
            <span className="new-price">{sale_price}৳</span>
            <span className="old-price">{regular_price}৳</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
