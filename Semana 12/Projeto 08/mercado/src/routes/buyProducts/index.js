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
    <>
      <Link className="button" to="/Products">
        <Button colorScheme='blue'>
          <Text>Carrinho</Text>
        </Button>
      </Link>
      {products}
    </>
  );
};

export default BuyProducts;
