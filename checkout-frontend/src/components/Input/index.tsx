import './styles.css';


const Input = () => {
    function onChange(inputValue: any){
        const code: string = inputValue.target.value;
        if(code.length === 13){
            if(code.substring(0, 3) === "789") {
                alert("Codigo de Barras: " + code);
            }
            else{
                alert("Codigo de Barras invalido!");
            }
            
        }
    }

    return (
        <>
            <input className='inputText' onChange={onChange} />
        </>
    );
}

export default Input;