import React from 'react';
import TopDiv from "../../Components/TopDiv";
import {handOmPageStyle} from "./HandsOn.style";
import {mainPageStyle} from "../Main/Main.style";
import Workshop from "../../Components/Workshop";
import {WorkshopData} from "../../Components/Workshop/WorkshopData";


const HandsOnPage: React.FC = () => (
    <div className={handOmPageStyle().page}>
        <TopDiv title={"Hands On"}/>
        <div className={mainPageStyle().div}>
            <p className={mainPageStyle().title}>Hands On</p>
        </div>
        <div className={handOmPageStyle().divText}>
            <p className={handOmPageStyle().textH1}>Um dia de experiências práticas na área de Tecnologia da Informação!</p>
            <p className={handOmPageStyle().text}>O Hands On da Fatec é um evento gratuito, destinado a estudantes da Fatec Mogi Mirim, com o objetivo de auxiliar na escolha de tecnologias emergentes no mercado de trabalho.</p>
            <p className={handOmPageStyle().text}>Durante o evento os estudantes poderão participar de oficinas e conhecer de perto uma ou mais tecnologia apresentada em 04 laboratórios da unidade.</p>
            <p className={handOmPageStyle().text}>De uma maneira divertida você conhecerá várias trilhas de atuação. Participe das oficinas e entre em contato com o seu futuro profissional!</p>
            <p className={handOmPageStyle().text}>Veja as oficinas abaixo:
            </p>
        </div>
        <div>
            {
                WorkshopData.map((workshop)=>{
                   return(
                       <Workshop title={workshop.title} img={workshop.imgPath} name={workshop.name} company={workshop.company} resume={workshop.resume} about={workshop.about}/>
                   )
                })
            }
        </div>
    </div>
);

export default HandsOnPage;
