import ErrorVideo from './ErrorVideo/ErrorVideo';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div>
        <p className={styles.text}>The dark side of the force has won.<br />
            We cannot display data.<br />
            Come back when we fix everything.
        </p>
        <ErrorVideo />
    </div>
  )
};

export default ErrorMessage;