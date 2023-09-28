import { NoteNumber } from "../../NoteNumber";
import { TodoCard } from "./TodoCard";

// Condicionais tradicionais -> não são aceitas no HTML do JSX
// if(noteList.length > 0) {
//   <ul></ul>            
// } else {
//   <p>Crie sua primeira nota</p>
// }

//Condicionais Ternária -> são aceitas no HTML do JSX
//Versão ternária de if e else:
/*
  minhaCondicao ? fareiA : fareiB
  condicao ? respostaVerdadeira : respostaFalsa
*/

// Versão ternária de if sem else:
/*
  condicao && respostaVerdadeira
*/

export const TodoList = ({ listNotes, removeNote }) => {
  //   console.log(listNotes);
  //   console.log(removeNote)

  return (
    <div>
      <h2 className="title one">Lista de notas</h2>
      <NoteNumber listNotes={listNotes} />

        {/* Caso tenha notas em noteList, renderiza-las na tela */}
      {listNotes.length > 0 ? (
      <ul>
        {listNotes.map((note) => {
          const { title, message, id, category } = note;

          return (
            <TodoCard
              key={id}
              id={id}
              title={title}
              message={message}
              category={category}
              removeNote={removeNote}
            />
          );
        })}
      </ul>
      ) : 
      /* Se não, renderizar a frase "Crie sua primeira nota" */
      <p className="paragraph">Crie sua primeira nota</p>
    }
    </div>
  );
};
