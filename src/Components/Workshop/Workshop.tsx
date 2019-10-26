import React from 'react';
import {workshopStyle} from "./WorkShop.style";


interface IProps {
    title: string;
    img: string;
    name:string;
    company: string;
    resume: string;
    about: string;
}

const Workshop = (props: IProps) => {

    return (
        <div>
            <div className={workshopStyle().divTitle}>
                <p className={workshopStyle().title}>{props.title}</p>
            </div>
            <div>
                <table>
                    <tr>
                        <td>
                    <img className={workshopStyle().img} src={props.img}/>
                        </td>
                        <td>

                    <p className={workshopStyle().textH1}>{props.name}</p>
                    <p className={workshopStyle().textH2}>{props.company}</p>
                    <p className={workshopStyle().text}>{props.resume}</p>
                    <p className={workshopStyle().textH2}>Sobre o Hands On</p>
                    <p className={workshopStyle().text}>{props.about}</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default Workshop;
