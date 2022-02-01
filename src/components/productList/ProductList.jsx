import "./productList.css"
import Product from "../product/Product"
const ProductList = () => {
  return <div className="pl">
      <div className="pl-texts">
          <h1 className="pl-title">Adekunle is Awesome and Dope asf</h1>
          <p className="pl-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto ab voluptatibus harum dolore optio officiis eum nihil aperiam ullam iusto
          </p>

      </div>
      <div className="pl-list">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>

      </div>
  </div>;
};

export default ProductList;
