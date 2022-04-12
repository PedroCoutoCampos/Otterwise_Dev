import { Container } from "@chakra-ui/react";


import CarrinhoProd from "../../components/Carrinho/CarrinhoProd";

const Products = () => {
  return (
    <div>
      <Container display="flex" padding="20px">
        <CarrinhoProd />
      </Container>
    </div>
  );
};

export default Products;