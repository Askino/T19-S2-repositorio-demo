export const TotalValue = ({list}) => {
    const totalValue = list.reduce((previewValue, fruit) => {
        return previewValue + fruit.price;
      }, 0);

    return (
        <h2>
          Total:{totalValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>
    )
}