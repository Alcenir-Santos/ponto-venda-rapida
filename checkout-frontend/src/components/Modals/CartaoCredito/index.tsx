/* eslint-disable array-callback-return */
import { useState } from 'react';
import './styles.scss';
import { ReactComponent as MasterCardIco } from 'assets/img/MasterCard.svg';
import { ReactComponent as VisaCardIco } from 'assets/img/VisaCard.svg';
import { ReactComponent as EloCardIco } from 'assets/img/EloCard.svg';
type Props = {
    amount: number;
}

const Cartao = ({ amount = 150 }: Props) => {
    const [numCartao, setNumCartao] = useState('1234 1234 1234 1234');
    const [nomeTitular, setNomeTitular] = useState('Alcenir barbosa dos santos');
    const [bandeira, setBandeira] = useState('Master');

    const selectBandeira = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBandeira(e.target.value);
    }

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const onChangeNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        let aux = '';
        let num = e.target.value;
        let array = num.replace(/ /g, '').split('');
        if (num >= aux) {
            array.map((item, i) => {
                if (i === 4 || i === 8 || i === 12) {
                    aux += ' ';
                }
                aux += item;
            });
        }
        setNumCartao(aux);
    }
    const onChangeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNomeTitular(e.target.value.toUpperCase());
    }


    return (
        <div className='bodyDetailsPayment'>
            <div className="cartao">
                <label className='numCardDetails'>{numCartao}</label>
                <div className='nomeCartao'>
                    <label>{nomeTitular}</label>
                    <div className="iconeCartao">
                        {bandeira === 'Master' ? <MasterCardIco /> : bandeira === 'Visa' ? <VisaCardIco /> : bandeira === 'ELO' ? <EloCardIco /> : ''}
                        <label>{bandeira === 'Master' ? 'Master Card' : bandeira === 'Visa' ? 'Visa Card' : bandeira === 'ELO' ? 'Elo Card' : ''}</label>
                    </div>
                </div>
            </div>
            <form>
                <div className="dadosPagamento">
                    <div className='dadosCard'>
                        <label>
                            <span>Valor</span>
                            <input type="text" value={formatter.format(amount)} />
                        </label>
                        <label>
                            <span>Tipo</span>
                            <select>
                                <option></option>
                                <option>Debito</option>
                                <option>Crédito</option>
                            </select>
                        </label>
                        <label>
                            <span >Cartão</span>
                            <select onChange={selectBandeira}>
                                <option ></option>
                                <option id='Visa'>Visa</option>
                                <option id='Master'>Master</option>
                                <option id='ELO'>ELO</option>
                            </select>
                        </label>
                    </div>
                    <label className='numCard'>
                        <span>Numero Cartão</span>
                        <input type="text" value={numCartao} onChange={onChangeNum} pattern='[^\d{4}(?:\-\d{4})?(?:\-\d{4})?(?:\-\d{4})?$]' maxLength={19} />
                    </label>
                    <label className='nameHolder'>
                        <span>Titular do Cartão</span>
                        <input type="text" value={nomeTitular} onChange={onChangeNome} maxLength={25} />
                    </label>
                </div>
            </form>
        </div>
    );
}
export default Cartao;