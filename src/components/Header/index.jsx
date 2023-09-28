import lexNoteImg from "../../assets/lexNote.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.headerBox}>
            <img src={lexNoteImg} alt="Logo LexNote" />
        </header>
    )
}