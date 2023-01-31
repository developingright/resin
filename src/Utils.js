const InputField = (props) =>{
    return(
        <div className={props.formClass}>
            <label className={props.labelClass} htmlFor={props.labelFor} value={props.value}>{props.labelText}</label>
            <input type={props.type} id={props.id} className={props.inputClass} />
        </div>  
    );
}
export default InputField;