import {
  Container,
  Heading,
  Button,
  useToast,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

import { useState } from "react";

import { Link } from "react-router-dom";
import { Real } from "../../ConfigSystem/ConfigSystem.js";

const ProductCart = () => {
  const storageCart = JSON.parse(localStorage.getItem(`cart`) || "[]");
  const [cart, setCart] = useState(storageCart);
  const toast = useToast();

  console.log({ cart });

  return (
    <div>
      <Container
        align="center"
      >
        <Heading colorScheme="blue"
        >Carrinho de Compras</Heading>
        <Button
          size="lg"
          colorScheme="blue"
          mt="24px"
          display="flex"
          onClick={() => {
            localStorage.removeItem("cart");
            setCart([]);
            toast({
              title: "Compra Realizada",
              description: "Obrigado e volte sempre.",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }}
        >
          Comprar
        </Button>
        <Link to="/">
          <Button size="lg" colorScheme="blue" mt="24px">
            <Text>Voltar para Mercado</Text>
          </Button>
        </Link>

        <Container
          display="flex"
          flexDirection="row"
          margin="50px"
          padding="20px"
          colorScheme="blue"
        >
          {cart.map((item) => {
            return (
              <Box width="150px" id={item.id} colorScheme="blue" align="center">
                <Heading align="center" mb={10}>{item.name} </Heading>
                <Image
                  align="center"
                  maxHeight="120px"
                  maxWidth="150px"
                  src={item.img}
                ></Image>
                <Text fontSize="xl" fontWeight="600" align="center">
                  Preço Unitário: {Real(item.price)}
                </Text>
                <Text fontSize="xl" fontWeight="600" align="center">
                  Total a pagar: {Real(item.price * item.Quantidade)}
                </Text>
                <Text fontSize="xl" fontWeight="600" align="center">
                  Quantidade: {Real(item.Quantidade)}
                </Text>
              </Box>
            );
          })}
        </Container>
      </Container>
    </div>
  );
};

export default ProductCart;
