import { Container } from "@chakra-ui/react";
import ProductCart from "../../components/ProductCart";

const Products = () => {
  return (
    <div>
      <Container display="flex" padding="20px">
        <ProductCart />
      </Container>
    </div>
  );
};

export default Products;