import React from 'react';
import SliderComponent from "../../Components/Slider";
import {mainPageStyle} from "./Main.style";
import Category from "../../Components/Category";


const MainPage: React.FC = () => (
    <div className={mainPageStyle().page}>
        <div className={mainPageStyle().mainDiv}>
            <div>
                <img className={mainPageStyle().imgLogo} src='https://lh5.googleusercontent.com/1h22ARhfLyjk7x-b9rdElpw0aBSPh1YG416zrGfmc5BZ7gEVvxF4QpBxZXviuPFrrbe7Q8qoO2O_xq0cADBFk_CrUJH42hMYe6-5Tpf8AsiG3nV8oWo=w271'/>
            </div>
        </div>
        <div className={mainPageStyle().div}>
            <p className={mainPageStyle().title}>Descrição do Evento</p>
        </div>
        <div >
        <SliderComponent/>
        </div>
        <div >
            <p className={mainPageStyle().text}>O Evento está na sua terceira edição.</p>
            <p className={mainPageStyle().text}>Está dividido em duas categorias:</p>
            <p className={mainPageStyle().text}>Hands On</p>
            <p className={mainPageStyle().text}>Palestras</p>
        </div>
        <div>
             <Category title={"Hands On"} text={"O Hands On da Fatec é um evento gratuito, destinado a estudantes da Fatec Mogi Mirim, com o objetivo de auxiliar na escolha de tecnologias emergentes no mercado de trabalho."}/>
             <Category title={"Palestras"} text={"No ano de 2016 foram os mais variados temas trabalhados em um dia inteiro de trabalho. Foram contemplados temas como, o ciclo e criação de um produto IoT, o desenvolvimento ágil de software, a disponibilidade em ambientes críticos, Linguagem Java nos dias de hoje, o desenvolvimento API Rest com PHP – Laravel, como tornar-se hip com JHipster, Cloud Computing / mercado de trabalho e finalizou-se os trabalhos com a abordagem do tema Android - por onde começar. Já em 2017 foram realizadas palestras com as temáticas: React, Contra-metodologias de desenvolvimento, Big Data, Node.js & Docker - Como ser um dev hipster, Paradigmas para aplicativos web: Progressivo e Reativo, Firebase em Android."}/>
        </div>

    </div>
);

export default MainPage;
