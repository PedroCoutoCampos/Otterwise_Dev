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
  import { Real } from "../../Config/configsystem";
  
  const ProductCart = () => {
    const storageCart = JSON.parse(localStorage.getItem(`cart`) || "[]");
    const [cart, setCart] = useState(storageCart);
    const toast = useToast();
  
    console.log({ cart });
  
    return (
      <div>
        <Container>
          <Heading>Your Cart</Heading>
          <Button
            size="lg"
            colorScheme="green"
            mt="24px"
            onClick={() => {
              localStorage.removeItem("cart");
              setCart([]);
              toast({
                title: "completed purchase",
                description: "come back whenever you want with us.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            }}
          >
            Checkout
          </Button>
          <Link to="/">
            <Button size="lg" colorScheme="green" mt="24px">
              <Text>keep buying</Text>
            </Button>
          </Link>
  
          <Container
            display="flex"
            flexDirection="row"
            margin="50px"
            padding="20px"
          >
            {cart.map((item) => {
              return (
                <Box width="150px" id={item.id}>
                  <Heading mb={10}>{item.name}</Heading>
                  <Image
                    maxHeight="120px"
                    maxWidth="150px"
                    margin="20px"
                    src={item.img}
                  ></Image>
                  <Text fontSize="xl" fontWeight="600">
                    Preço Unitario {Real(item.price)}
                  </Text>
                  <Text fontSize="xl" fontWeight="600">
                    Total a pagar {Real(item.price * item.Quanti)}
                  </Text>
                  <Text fontSize="xl" fontWeight="600">
                    Quantidade {Real(item.Quanti)}
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