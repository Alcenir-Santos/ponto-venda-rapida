
import './styles.css';
import Foto from '../../assets/img/placaVideo.png';
type Props ={
    path: string;
}

const Image = ({path}: Props) =>{
    return(
        <>
            <img className='photo' src={Foto} alt='Foto do Produto'/>
        </>
    )
}
export default Image;