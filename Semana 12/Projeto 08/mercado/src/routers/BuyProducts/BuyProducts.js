import { Link } from "react-router-dom";

import { Text, Button } from "@chakra-ui/react";

import Compras from "../../components/Compras/Compras";
import Frutas from "../../services/Frutas/Frutas";

const BuyProducts = () => {
  const products = Frutas.map((product) => (
    <Compras
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