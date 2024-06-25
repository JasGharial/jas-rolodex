import { ChangeEventHandler } from 'react';

import './search-box.styles.css';


interface ISearchBoxProps {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBox({className, onChangeHandler, placeholder}: ISearchBoxProps) {
    return(
        <input 
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
}