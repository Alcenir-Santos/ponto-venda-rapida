import './styles.css';
import {ReactComponent as StatusSefaz} from 'assets/img/status.svg';

const LogoSefaz = () =>{
    return(
        <>
            <div className='status'>
                <span className='textStatus'>
                    STATUS SEFAZ 
                </span>
                <StatusSefaz />
            </div>
        </>
    )
}

export default LogoSefaz;