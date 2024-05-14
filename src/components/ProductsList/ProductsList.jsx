import Product from "../Product/Product";
import CustomCss from "./productslist.module.css";

function ProductsList() {
    const products = [
        {
            id: 1,
          name: "Macbook Air 13 Chip M1 256gb",
          image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
          price: "R$ 7999.00",
        },
        {
            id: 2,
          name: "Echo Dot (4ª Geração)",
          image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
          price: "R$ 379.00",
        },
        {
            id: 3,
          name: "Câmera Ip Sem Fio 360°",
          image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
          price: "R$ 199.00",
        },
        {
            id: 4,
          name: "Fechadura Eletrônica Digital Inteligente Zigbee",
          image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
          price: "R$ 1599.00",
        },
    ];

    const productsItems = products.map(product => {
        return (
            <>
                <Product key={product.id} {...product}/>
            </>
        );
    })

    return (
      <div className={CustomCss.cont}>
        <h1 className={CustomCss.text}>Products</h1>
        <ul className={CustomCss.list}>
            {productsItems}
        </ul>
      </div>
    );
}
  
export default ProductsList;