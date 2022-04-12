import { useState } from "react";
import { Real } from "../../ConfigSystem/ConfigSystem.js";
import "./styles.css"
import {
  Box,
  Container,
  Text,
  Heading,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Image,
  useToast,
} from "@chakra-ui/react";

const CartProduct = (props) => {

  const { img, name, id, price } = props;
  const [Quantidade, setQuantidade] = useState(0);

  const toast = useToast();

  const handleClick = (img, name, id, price, Quantidade) => {
    const data = { img, name, id, price, Quantidade };
    const cart = JSON.parse(localStorage.getItem(`cart`) || "[]");
    cart.push(data);
    localStorage.setItem(`cart`, JSON.stringify(cart));
  };

  const handleChange = (event) => {
    setQuantidade(event);
  };

  console.log(Quantidade);

  return (
    <div className="CardProduct">
      <div><Container
        padding="20px"
        align="center"
        width="100%"
        height="100%"
      >
        <Box width="150px" id={id}>
          <Heading mb={10}>{name}</Heading>
          <Image
            maxHeight="120px"
            maxWidth="150px"
            margin="20px"
            src={img}
          ></Image>
          <Text fontSize="xl" fontWeight="600">
            Preço {Real(price)}
          </Text>
          <Text fontSize="xl" fontWeight="600"></Text>
          <NumberInput
            color="blue"
            size="md"
            maxW="50%"
            defaultValue={1}
            min={0.5}
            max={10}
            value={Quantidade}
            onChange={handleChange}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            mt="24px"
            color="white"
            backgroundColor="blue"
            onClick={() => {
              handleClick(img, name, id, price, Quantidade);
              toast({
                title: "Item Adicionado ao Carrinho",
                description: "Adicionado no carrinho",
                status: "success",
                duration: 1000,
                isClosable: true,
              });
            }}
          >
            Adicionar no Carrinho
          </Button>
        </Box>
      </Container>
      </div></div >
  );
};

export default CartProduct;
