import { useState } from "react";
import { Real } from "../../config/Config/config";

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
  const [Quanti, setQuanti] = useState(0);

  const toast = useToast();

  const handleClick = (img, name, id, price, Quanti) => {
    const data = { img, name, id, price, Quanti };
    const cart = JSON.parse(localStorage.getItem(`cart`) || "[]");
    cart.push(data);
    localStorage.setItem(`cart`, JSON.stringify(cart));
  };

  const handleChange = (event) => {
    setQuanti(event);
  };

  console.log(Quanti);

  return (
    <div>
      <Container
        display="flex"
        flexDirection="row"
        margin="50px"
        padding="20px"
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
            size="md"
            maxW="50%"
            alignItems="center"
            defaultValue={1}
            min={0.5}
            max={10}
            value={Quanti}
            onChange={handleChange}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            size="lg"
            colorScheme="green"
            mt="24px"
            onClick={() => {
              handleClick(img, name, id, price, Quanti);
              toast({
                title: "item add",
                description: "add in to car",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
            }}
          >
            Add in Cart
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default CartProduct;