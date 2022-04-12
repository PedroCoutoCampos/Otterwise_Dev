import { Link } from "react-router-dom";

import { Text, Button } from "@chakra-ui/react";
import "./styles.css"
import CartProduct from "../../components/CartProduct";
import ApiFruits from "../../services/ApiFruits";

const BuyProducts = () => {
  const products = ApiFruits.map((product) => (
    <CartProduct
      id={product.id}
      name={product.name}
      img={product.img}
      price={product.price}
      unit={product.img}
    />
  ));

  return (
    <div className="BuyProducts">
      <Link className="Cards" to="/Products">
        <Button colorScheme="blue" variant='outline'>
          <Text>Carrinho</Text>
        </Button>
      </Link>
      {products}
    </div>
  );
};

export default BuyProducts;
