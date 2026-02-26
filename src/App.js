import "./App.css";
import Button from "react-bootstrap/Button";
import NavbarComponent from "./Ui/NavbarComponent";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <h1>The Generics</h1>
      <div className="products-container">
        {/* {productsArr.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Button variant="primary">Add to Cart</Button>
          </div>
        ))} */}

        {
          productsArr.map((product,index)=>(
            <div key={index} className="product-card">
              <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} className="product-image"/>
            <p>${product.price}</p>
            <Button variant="primary">Add to cart</Button>
              </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
