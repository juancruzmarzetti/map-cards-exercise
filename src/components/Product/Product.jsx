import CustomCss from "./product.module.css";

function Product({name, image, price}) {
    return (
        <li className={CustomCss.listItem}>
            <h2>{name}</h2>
            <img src={image}/>
            <h3>{price}</h3>
        </li>
    );
}
  
export default Product;