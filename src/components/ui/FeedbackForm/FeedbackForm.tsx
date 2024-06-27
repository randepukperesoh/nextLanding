import styles from './FeedbackForm.module.css'

const FeedbackForm = () => {

    return(
        <div className={styles.wrapper}>
            <h5 className={styles.formHeading}>Do you still have any questions?</h5>
            <p className={styles.formParagraph}>Don't hesitate to leave us your phone number. We will contact you to discuss any questions you may have</p>
            <form className={styles.formWrapper}>
                <input placeholder='Enter your phone number'/>
                <button>Subscribe</button>
            </form>
        </div>
    )
}

export default FeedbackForm