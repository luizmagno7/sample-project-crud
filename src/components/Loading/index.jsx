import styles from './Loading.module.scss'

const Loading = ({ loadingText }) => {
    return (
        <div className={styles.container}>
            <i className={styles.icon}></i>
            {
                loadingText && (
                    <footer className={styles.footer}>
                        <span>{ loadingText }</span>
                    </footer>
                )
            }
        </div>
    )
}

export default Loading;