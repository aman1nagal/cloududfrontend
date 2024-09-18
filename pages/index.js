import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/login";
  }, []);
  return <div className={styles.container}></div>;
}
