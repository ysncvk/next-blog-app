import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, yasin here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.images} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            veritatis mollitia esse quis temporibus. Dolore consequatur
            voluptatibus explicabo repellendus iusto veritatis dolorem corporis
            suscipit nemo molestiae, aliquam, ea nulla minus!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};
