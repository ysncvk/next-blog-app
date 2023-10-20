import React from "react";
import styles from "./blogPage.module.css";
import { CardList } from "@/components/cardList/CardList";
import { Menu } from "@/components/menu/Menu";

export default function BlogPage() {
  return (
    <div>
      <div className={styles.title}>Style</div>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
