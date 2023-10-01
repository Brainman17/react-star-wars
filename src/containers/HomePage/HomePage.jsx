import ChooseSide from '@components/HomePage/ChooseSide/ChooseSide';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}> 
        <h1 className='title'>Home Page</h1>
        <ChooseSide />
    </div>
  )
};

export default HomePage;