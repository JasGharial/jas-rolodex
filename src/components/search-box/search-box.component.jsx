import './search-box.styles.css';

export default function SearchBox({className, onChangeHandler, placeholder}) {
    return(
        <input 
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
}