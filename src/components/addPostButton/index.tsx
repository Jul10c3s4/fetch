interface IAddPostButton{
    title: string,
    click: any,
    disabled: boolean
}

export const AddPostButton = ({title, click, disabled}: IAddPostButton)=>{
    return(
        <button onClick={click} disabled={disabled} >{title}</button>
    )
}