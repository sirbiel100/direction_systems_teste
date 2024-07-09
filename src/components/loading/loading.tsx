"use client"

import styles from "./loading.module.scss";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { useEffect, useState } from "react";

export default function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 700);
    }, [])

    return (
        <div className={styles.loading} style={{display: !loading ? "none" : "flex"}}>
            <Image src={logo} alt="Logo"/>
            <div>
                <p>Direction</p>
                <p>Systems</p>
            </div>
        </div>
    )
}