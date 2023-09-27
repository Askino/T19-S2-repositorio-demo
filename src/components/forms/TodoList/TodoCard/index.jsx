export const TodoCard = ({title, message, id, removeNote}) => {
    // console.log(removeNote)
    
    return(
        <div>
            <h3 className="title two">{title}</h3>
            <p className="paragraph">{message}</p>
            <button onClick={() => removeNote(id)} className="btn small">Excluir</button>
        </div>
    )
}