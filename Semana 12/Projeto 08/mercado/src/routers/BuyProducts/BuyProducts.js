import { Link } from "react-router-dom";

import { Text, Button } from "@chakra-ui/react";

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
    <div>
      <Link to="/Products">
        <Button size="lg" colorScheme="green" mt="24px">
          <Text>Cart</Text>
        </Button>
      </Link>
      {products}
    </div>
  );
};

export default BuyProducts;