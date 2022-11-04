import React from 'react';
import AllScroll from './AllScroll';
import Edit from './Edit';
import styles from "./styles.module.scss";


const DetailView: React.FC = () => {
  return (
    <div className={styles.container}>
       <h1>DetailView Page</h1>        {/*seperate page in 2 pieces with scss */}
      <div className={styles.left}>
          <AllScroll />
      </div>
      <div className={styles.right}>
          <Edit />
      </div>
    </div>
  )
}

export default DetailView;