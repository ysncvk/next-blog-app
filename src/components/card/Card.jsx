import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.10.2023-</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          eos sequi aut odit nesciunt quibusdam ab reiciendis ipsum esse quo
          beatae nisi autem similique dolorum ipsa accusantium ducimus
          temporibus in animi modi laudantium illum modi...
        </p>
        <Link className={styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
}
