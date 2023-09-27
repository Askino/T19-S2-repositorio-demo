import { TodoCard } from "./TodoCard";

export const TodoList = ({ listNotes, removeNote }) => {
//   console.log(listNotes);
//   console.log(removeNote)

  return (
    <div>
      <h2 className="title one">Lista de notas</h2>
      <span>Notas: {listNotes.length}</span>
      <ul>
        {listNotes.map((note) => {
          const { title, message, id } = note;

          return <TodoCard key={id} id={id} title={title} message={message} removeNote={removeNote} />;
        })}
      </ul>
    </div>
  );
};
