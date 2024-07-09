import Image from "next/image";
import foto from "../../../public/callmanager.svg"
import produtoStyle from "./produto.module.scss"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProdutoCardProps {
    id: string;
    src: string | StaticImport;
    tittle: string;
    paragraph: string;
    reversed: boolean;
}

export default function ProdutoCard({id, src, tittle, paragraph, reversed} : ProdutoCardProps) {
    return (
        <section className={produtoStyle.produto} id={id} style={{flexDirection: reversed ? "row-reverse" : "row"}}>
            <Image src={src} alt="Imagem do produto" width={500} height={500}/>

            <main>
            <h1>{tittle}</h1>
            <p>{paragraph}</p>
            <button>Saiba Mais</button>
            </main>
        </section>
    )
}