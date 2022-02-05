import './styles.css';
type Props ={
    setProps: Function;
}

const Input = ({setProps}: Props) => {
    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        const code: string = e.target.value;
        if(code.length === 13){
            if(code.substring(0, 3) === "789") {
                setProps({id: code, name: 'produto 2', unitMeasure: 'UN', unitaryValue: 120.00, quantity: 2, amount: 240.00 })
            }
            else{
                alert("Codigo de Barras invalido!");
            }
            
        }
    }

    return (
        <>
            <input name='txtCodBarra' className='inputText' onChange={(e)=>onChange(e)} />
        </>
    );
}

export default Input;