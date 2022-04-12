export const Real = (price = 0) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  export const numberToBRL = (num, toFixed = 2) => `R$ ${num.toFixed(toFixed)}`;
