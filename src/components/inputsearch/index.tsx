import "./styles.css"
interface IInputSearch{
    placeholder: string,
    value?: string,
    onChange?: any
}

export const InputSearch = ({placeholder, value, onChange}:IInputSearch)=>{
    return(
        <input type="search" className="inputSearch" placeholder={placeholder} value={value} onChange={onChange} ></input>
    )
}