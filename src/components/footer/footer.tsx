import Link from "next/link"
import Image from "next/image"
import facebook from "../../../public/facebook.svg"
import linkedin from "../../../public/linkedin.svg"
import twitter from "../../../public/twitter.svg"
import footerStyle from "./footer.module.scss"
export default function footer() {
    return (
        <footer className={footerStyle.footer}>
            <section>
                <p>Direction Systems</p>
                <Link href={"https://maps.app.goo.gl/ucFbXggU5Vro6Fo18"} target="_blank">Av. Agamenon Magalhães, 2615 / 13º andar - Boa Vista, Recife, PE - CEP: 50050-290</Link>
                <p>© 2024 Direction Systems Ltda. Todos os direitos reservados.</p>
            </section>

            <section>
                <p>Conecte-se conosco</p>
                <div>
                    <Image src={facebook} alt="Facebook"/>
                    <Image src={linkedin} alt="LinkedIn"/>
                    <Image src={twitter} alt="Twitter"/>
                </div>
            </section>
        </footer>
    )
}