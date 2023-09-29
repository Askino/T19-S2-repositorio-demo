import lexNoteImg from "../../assets/LexNote.svg"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.headerBox}>
            <img src={lexNoteImg} alt="Logo LexNote" />
        </header>
    )
}