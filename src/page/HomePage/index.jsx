import { TodoForm } from "../../components/forms/TodoForm";
import { TodoList } from "../../components/forms/TodoList";
import { useState } from "react";

import styles from "./style.module.scss";
import { Header } from "../../components/Header";

export const HomePage = () => {
  const [listNotes, setListNotes] = useState([]);

  //{ title, message }
  const addNote = (title, message, category) => {
    const id = crypto.randomUUID();
    const newNote = { title, message, category, id };

    setListNotes([...listNotes, newNote]);
    console.log(listNotes);
  };

  const removeNote = (id) => {
    const listFiltered = listNotes.filter((note) => {
      if (note.id !== id) {
        return note;
      }
    });

    setListNotes(listFiltered);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.flexBox}>
          <TodoForm addNote={addNote} />
          <TodoList listNotes={listNotes} removeNote={removeNote} />
        </div>
      </main>
    </>
  );
};
