import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import { Menu } from "@/components/menu/Menu";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Joe Down</span>
              <span className={styles.userdate}> 25.10.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.images} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur vel praesentium eius cupiditate voluptates autem
            necessitatibus, ea error, quod rem, ad voluptas nesciunt! Nulla
            magnam quis maiores laborum ea veniam, itaque officiis, laboriosam
            ducimus quaerat pariatur quam. Sunt aperiam dolore corporis! Magni
            odit aliquid expedita illum omnis eos ad laudantium?{" "}
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            vero totam, sint aliquam, consequatur ipsam blanditiis repellendus,
            mollitia veniam earum ratione error ducimus maiores consectetur
            dolorum in laudantium cum eos exercitationem. Harum at ab cupiditate
            accusantium tempore perspiciatis fuga tenetur? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consectetur, dignissimos?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            consequuntur possimus delectus magni, expedita unde suscipit quo
            numquam sequi? Doloremque inventore ex voluptatum, facere sunt
            deleniti vel et sit enim?
          </p>
        </div>

        <Menu />
      </div>
    </div>
  );
}
