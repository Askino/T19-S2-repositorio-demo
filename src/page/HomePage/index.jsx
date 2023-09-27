import { TodoForm } from "../../components/forms/TodoForm";
import { TodoList } from "../../components/forms/TodoList";
import { useState } from "react";

export const HomePage = () => {
  const [listNotes, setListNotes] = useState([])

  //{ title, message }
  const addNote = (title, message) => {
    const id = crypto.randomUUID();
    const newNote = {title, message, id};

    setListNotes([...listNotes, newNote]);
    console.log(listNotes);
  }

  const removeNote = (id) => {
    const listFiltered = listNotes.filter((note) => {
      if(note.id !== id) {
        return note
      }
    });

    setListNotes(listFiltered);
  }

  return (
    <main>
      <TodoForm addNote={addNote} />
      <TodoList listNotes={listNotes} removeNote={removeNote}/>
    </main>
  );
};
