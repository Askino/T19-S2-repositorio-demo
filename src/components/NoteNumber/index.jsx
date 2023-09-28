import styles from "./style.module.scss"

export const NoteNumber = ({ listNotes }) => {
  //  Todas as Notas e somar todas as quantidades de caracteres das notas
  const totalChar = listNotes.reduce((prevValue, note) => {
    return prevValue + note.title.length + note.message.length;
  }, 0);
  
  return (
    <div className={styles.numberBox}>
      <p className="paragraph">
        Notas: <span className="paragraph bold">{listNotes.length}</span> Caracteres: <span className="paragraph bold">{totalChar}</span>
      </p>
    </div>
  );
};
