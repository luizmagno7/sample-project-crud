import styles from "./NextSlideButton.module.scss";

const NextSlideButton = ({ onClick }) => {
    return (
        <button type="button" className={styles.btnNext} onClick={onClick}>
            Próximo
        </button>
    )
}

export default NextSlideButton;