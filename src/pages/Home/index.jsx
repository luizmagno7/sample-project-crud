import React from "react";
import SimpleSlider from './../../components/Slider/index';
import PageTitle from "../../components/PageTitle";

import styles from "./Home.module.scss"

const Home = () => {
    return (
        <>
            <SimpleSlider></SimpleSlider>

            <article className={styles.container}>
                <PageTitle>Onça-pintada</PageTitle>

                <p>A onça-pintada é um mamífero da Ordem Carnivora e Família Felidae. Atualmente é mais encontrada na América Latina, por exemplo, no Brasil. Ela é considerada o maior felino das Américas e o maior carnívoro da América do Sul, podendo pesar até 135 kg.</p>

                <p>A onça-pintada alimenta-se de animais silvestres, como catetos, veados e tatus. O desmatamento e a expansão da agricultura alteraram o habitat desses animais e tornou-os um alvo de caça dos seres humanos, o que reduziu a sua população. Atualmente está classificada, segundo a União Internacional Para a Conservação da Natureza e dos Recursos Naturais (IUCN), como quase ameaçada.</p>

                <h2>Características gerais das onças-pintadas</h2>

                <p>As onças-pintadas são mamíferos, assim, apresentam o corpo coberto por pelos, sendo que estes se apresentam na cor amarelo-dourado com manchas pretas na cabeça, no pescoço e nas patas. Nas regiões das costas, flancos e ombros, essas manchas apresentam-se em forma de roseta com pontos dentro. Em alguns indivíduos, pode ser observado um fenômeno denominado melanismo, assim eles apresentarão a cor da pelagem preta, no entanto, as rosetas ainda poderão ser observadas de acordo com a luminosidade — são chamados onça-preta.</p>

                <p>A onça-pintada é considerada o maior felino das Américas, sendo também o maior carnívoro da América do Sul, podendo medir cerca de um metro e 90 cm de comprimento e 80 cm de altura e pesar até 135 kg. Apresenta um corpo robusto e uma grande força muscular.</p>
            </article>
        </>
    )
}

export default Home;