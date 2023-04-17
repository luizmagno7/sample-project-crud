// import { v4 as uuidv4 } from 'uuid';

import styles from "./PageTitle.module.scss";

const PageTitle = ({ children }) => {
    // const uuid = uuidv4();

    // const style = `
    //     .page-title-${uuid}::before {
    //         content: "${title}";
    //     }
    // `;

    return (
        <>
            {/* <style>{style}</style> */}
            <h1 className={styles.pageTitle}>{children}</h1>
        </>
    )
}

export default PageTitle;