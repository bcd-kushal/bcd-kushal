"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

// components -------------------------------------------------
import MainPageLeftSide from "@/components/mainPage/leftSide";
import MainPageRightSide from "@/components/mainPage/rightSide";

// exports ----------------------------------------------------
export default function Home() {

  const [ rightSideBG, setRightSideBG ] = useState({ bgcolor: "white "})

  useEffect(() => {
    document.body.style.background = rightSideBG.bgcolor
  }, [])

  return (
    <main className={styles.parentContainer}>

      <section className={styles.lcm}>
        <MainPageLeftSide/>
      </section>

      <section className={styles.rcm}>
        <MainPageRightSide/>
      </section>
    </main>
  );
}
