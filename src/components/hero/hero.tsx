import Image from 'next/image';
import Link from 'next/link';
import heroStyle from './hero.module.scss';
import background from "../../../public/techBackground.jpg";
import logo from "../../../public/logo.svg";

export default function Hero() {
    return (
        <section className={heroStyle.hero}>
            <div>
                <h1>Direction Systems - Inovação em soluções empresariais</h1>
                <p>Descubra como nossa abordagem inovadora pode transformar sua empresa, impulsionando eficiência e criando novas oportunidades de crescimento.</p>
                <Link href={"#qs"}><button>Explorar</button></Link>
            </div>
            <Image src={background} alt="Imagem de fundo" />
        </section>
    )
}