import React from 'react';
import {categorytyle} from "./Category.style";


interface IProps {
    title: string;
    text: string;
}

const Category = (props: IProps) => {

    return (
        <div>
            <div className={categorytyle().divTitle}>
                <p className={categorytyle().title}>{props.title}</p>
            </div>
            <div>
                <p className={categorytyle().text}>{props.text}</p>
            </div>
        </div>
    )
};

export default Category;
