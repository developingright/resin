const InputField = (props) =>{
    return(
        <div className={props.formClass}>
            <input type={props.type} id={props.id} className={props.inputClass} />
            <label className={props.labelClass} htmlFor={props.labelFor}>{props.labelText}</label>
        </div>  
    );
}
export default InputField;