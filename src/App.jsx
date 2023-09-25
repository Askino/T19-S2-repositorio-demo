import { useState } from "react";
import { TotalValue } from "./TotalValue";

function App() {
  // let count = 0;
  // count = 1;

  // function add() {
  //   count++
  //   console.log(count)
  // }

  // const [variavel, funcaoParaModificarAVariavel] = useState(0)
  // const [count, setCount] = useState(0)

  // function add() {
  //   const newValue = count + 1
  //   setCount(newValue)
  // }

  const [listFruits, setListFruits] = useState([
    { id: 1, name: "Maçã", price: 4 },
    { id: 2, name: "Banana", price: 3 },
    { id: 3, name: "Uva", price: 5 },
  ]);

  function addFruit() {
    const newFruit = { id: 4, name: "Morango", price: 3.5 };
    // listFruits = [newFruit]
    //Metodos que não utilizamos: push, pop
    //Metodos que utilizamos: map, filter

    // spread operator -> ...
    setListFruits([...listFruits, newFruit]);
    
  }

  function removeFruit(id) {
    const filteredFruits = listFruits.filter((fruit) => {
      return fruit.id !== id;
    });

    setListFruits(filteredFruits);
  }

  return (
    <>
      <>
        {/* Contador */}
        {/* <h1>{count}</h1>
      <button onClick={add}>Adicionar 1</button>

      <h2>{ count ** 2 }</h2>
      <h2>{count.toLocaleString("pt-BR", {style:"currency", currency: "BRL"})}</h2> */}
      </>
      <>
        <ul>
          {listFruits.map((fruit) => {
            return (
              <li key={fruit.id}>
                <p>
                  {fruit.name} - preço: {fruit.price}
                </p>
                <button onClick={() => removeFruit(fruit.id)}>
                  Remover {fruit.name}
                </button>
              </li>
            );
          })}
        </ul>

        <TotalValue list={listFruits} />
        <button onClick={addFruit}>Adicionar morango</button>
        {/* <button onClick={() => removeFruit(3)}>Remover Uva</button> */}
      </>
    </>
  );
}

export default App;

//Contador
