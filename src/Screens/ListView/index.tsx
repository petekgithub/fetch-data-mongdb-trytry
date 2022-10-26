import React from 'react';
import styles from './style.module.scss';


const ListView: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>ListView</h1>
      <p>Search part and Fetch datas from db and show them here !!</p>
    </div>
  )
}

export default ListView;