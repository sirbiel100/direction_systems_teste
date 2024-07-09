"use client"

import Image from "next/image";
import logo from "../../../public/logo.svg";
import arrow from "../../../public/arrow.svg";
import Link from "next/link";
import navbarStyle from "./nav.module.scss"
import { useState } from "react";


export default function Navbar() {
    const [isOnTop, setIsOnTop] = useState(true);
    const [isProdutosInputChecked, setIsProdutosInputChecked] = useState(false);


    function checkIfOnTop() {
        if (window.scrollY > 0) setIsOnTop(false)
        else setIsOnTop(true)
    }

    typeof window !== "undefined" &&  window?.addEventListener("scroll", checkIfOnTop)

    const [hamburguerMenuOpen, setHamburguerMenuOpen] = useState(false); 

    const checkMenuStatus = () => {
        hamburguerMenuOpen ? setHamburguerMenuOpen(false) : setHamburguerMenuOpen(true)
    }

    const uncheckProdutosInput = () => {
        if (isProdutosInputChecked) setIsProdutosInputChecked(false)
            else setIsProdutosInputChecked(true)
    }
   

    return (
        <nav className={navbarStyle.navbar} style={{ boxShadow: isOnTop ? "0 0 1em transparent" : "0 0 1em #00000049", backgroundColor: isOnTop ? "transparent" : "#232524" }}>
            <section>
                <Image src={logo} alt="Logo da empresa" />
                <div>
                    <p>Direction</p>
                    <p>Systems</p>
                </div>
            </section>

            <section>
                <ul>
                    <li><Link href={"#qs"} onClick={() => setHamburguerMenuOpen(false)}>Quem Somos</Link></li>

                    <li><span>Produtos <Image src={arrow} alt="" /></span>
                        <input type="checkbox" id="open-produtos" onClick={() => uncheckProdutosInput()} checked={isProdutosInputChecked} readOnly/>
                        <label htmlFor="open-produtos" ></label>
                        <div>
                            <Link href={"#callmanager"} onClick={() => setHamburguerMenuOpen(false)}>CallManager</Link>
                            <Link href={"#clinic"} onClick={() => setHamburguerMenuOpen(false)}>Clinic</Link>
                            <Link href={"#sacm"} onClick={() => setHamburguerMenuOpen(false)}>SACM</Link>
                            <Link href={"#netbuffer"} onClick={() => setHamburguerMenuOpen(false)}>NetBuffer</Link>
                        </div>
                    </li>

                </ul>

                <Link href={"/entrar"}><button>Entrar</button></Link>
            </section>

            <input type="checkbox" id="hamburguer-input" onClick={() => checkMenuStatus()} checked={hamburguerMenuOpen} readOnly/>
            <label htmlFor="hamburguer-input">
                <div></div>
                <div></div>
                <div></div>
            </label>

            <div onClick={() => setHamburguerMenuOpen(false)}></div>
        </nav>
    )
}