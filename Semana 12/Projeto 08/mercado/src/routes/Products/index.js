import { Container } from "@chakra-ui/react";
import ProductCart from "../../components/ProductCart";
const Products = () => {
  return (
    <div className="ContainerProducts" colorScheme="blue">
      <Container >
        <ProductCart />
      </Container>
    </div>
  );
};

export default Products;
