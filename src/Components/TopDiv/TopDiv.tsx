import React from 'react';
import {topDivStyle} from "./TopDiv.style";


interface IProps {
    title?: string;
}

const TopDiv = (props: IProps) => {

    return (
        <div className={topDivStyle().div}>
            <div className={topDivStyle().text}>
                <p className={topDivStyle().title}>{props.title}</p>
            </div>
            <div>
                <img className={topDivStyle().imgLogo} src='https://lh5.googleusercontent.com/1h22ARhfLyjk7x-b9rdElpw0aBSPh1YG416zrGfmc5BZ7gEVvxF4QpBxZXviuPFrrbe7Q8qoO2O_xq0cADBFk_CrUJH42hMYe6-5Tpf8AsiG3nV8oWo=w271'/>
            </div>
        </div>
    )
};

export default TopDiv;
