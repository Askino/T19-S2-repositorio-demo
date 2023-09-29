import { useState } from "react";
import { Input } from "../Input";
import { Textarea } from "../TextArea";
import { Select } from "../Select";
import styles from "./style.module.scss"

export const TodoForm = ({addNote}) => {
  const [title, setTitle] = useState("");
  // const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("tarefas")

  const submit = (e) => {
    e.preventDefault();
    // console.log({ title, password, message });

    if(title !== "" && message !== "") {
      addNote(title, message, category);
      
      setTitle("");
      setMessage("");
    }

    // setPassword("");
  };


  return (
    <div className={styles.formBox}>
      <h2 className="title two">Cadastre uma nota</h2>
      <form onSubmit={submit}>
        <Input
          label="Título: "
          placeholder="Título da nota"
          type="text"
          id="title"
          value={title}
          setValue={setTitle}
        />

        <Textarea
          label="Mensagem: "
          placeholder="Mensagem"
          id="message"
          value={message}
          setValue={setMessage}
        />

        <Select id="category" label="Categoria: " setValue={setCategory} value={category}>
          <option value="tarefas">Tarefas</option>
          <option value="notas">Notas</option>
        </Select>

        {/* <Input
        label="Senha: "
        placeholder="Coloque a sua senha"
        type="password"
        id="password"
        value={password}
        setValue={setPassword}
      /> */}

        <button className="btn large full" type="submit">
          Criar nota
        </button>
      </form>
    </div>
  );
};
