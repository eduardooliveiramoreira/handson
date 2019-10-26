import React from 'react';
import {handOmPageStyle} from "../HandsOn/HandsOn.style";
import TopDiv from "../../Components/TopDiv";
import {mainPageStyle} from "../Main/Main.style";
import {lecturePageStyle} from "./Lecture.style";


const LecturePage: React.FC = () => (
    <div className={lecturePageStyle().page}>
        <TopDiv title={"Palestras"}/>
        <div className={mainPageStyle().div}>
            <p className={mainPageStyle().title}>Palestras</p>
        </div>
    </div>
);

export default LecturePage;
