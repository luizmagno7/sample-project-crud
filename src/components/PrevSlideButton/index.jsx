import styles from "./PrevSlideButton.module.scss";

const PrevSlideButton = ({ onClick }) => {
    return (
        <button type="button" className={styles.btnPrev} onClick={onClick}>
            Anterior
        </button>
    )
}

export default PrevSlideButton;