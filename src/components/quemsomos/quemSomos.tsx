import Image from "next/image"
import team from "../../../public/Collab-bro.svg"
import quemSomosStyle from "./quemSomos.module.scss"

export default function QuemSomos() {
    return (
        <section className={quemSomosStyle.quemSomos} id="qs">
            <Image src={team} alt="Imagem de uma equipe de colaboradores" />
            <main>
            <h1>Quem somos</h1>
            <p>A Direction Systems é uma empresa brasileira sediada em Recife, Pernambuco, especializada em tecnologia da informação como solução empresarial. Atua em todo o Brasil através de distribuidores, representantes e revendas, oferecendo produtos e serviços de TI. A empresa se destaca pela equipe de profissionais altamente qualificados e pela certificação Gold no programa Microsoft Partner, garantindo competência em soluções baseadas na plataforma Microsoft.</p>
            <p>Além da expertise em tecnologias Microsoft, incluindo Windows Server e Windows 10, a Direction Systems também possui conhecimento em outras plataformas como Linux, Mac OSX, Android e iOS. Isso permite à empresa desenvolver soluções diversificadas e de alta qualidade, atendendo às diversas necessidades de seus clientes.</p>
            </main>
        </section>
    )
}