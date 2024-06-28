import styles from './SpecialOffer.module.css'
const SpecialOffer = () => {

    return(
        <div className={styles.specialOffer}>
            <div className={styles.info}>
                <h2 className={styles.heading}>Edudu offers you a 30% discount this season</h2>
                <p className={styles.description}>Promotion valid from May 1, 2023 - June 30, 2023</p>
                <button className={styles.btn}>Explore now</button>
            </div>
            </div>
    )
}

export default SpecialOffer