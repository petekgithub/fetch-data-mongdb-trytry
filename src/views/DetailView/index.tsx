import React from 'react';
import AllScroll from './AllScroll';
import Edit from './Edit';
import styles from "./styles.module.scss";
import { SyncOutlined } from '@ant-design/icons';
import { message } from 'antd';



const DetailView: React.FC = () => {


  // const onReset = (id) => {
  //   postData({ url: `user-api/subscriber/reset/${id}` }).then(() => {
  //     message.success("Answers resetted successfully.");
  //   });
  // };

  // const actions = [
  //   { icon: <SyncOutlined />, text: 'Reset Answers', onClick: (x) => onReset(x._id) },
  // ]


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