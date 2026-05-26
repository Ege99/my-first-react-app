import "./ProductItem.css";

function ProductItem() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU";
  const productName = "Soda";
  const productPrice = 1.2 * 16;
  const productDate = new Date(2026, 6, 1);
  const formatter = productDate.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">
        <h2>{productName}</h2>
        <span>{productPrice}₺</span>
        <br />
        <span>{formatter}</span>
      </div>
    </div>
  );
}

export default ProductItem;
