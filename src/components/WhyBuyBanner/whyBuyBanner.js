import style from './whyBuyBanner.module.css';
import ModalNew from '../ModalNew/modalNew';
import ModalOrder from '../ModalOrder/modalOrder';
import ModalOriginal from '../ModalOriginal/modalOriginal';
import ModalPayment from '../ModalPayment/modalPayment';




export default function WhyBuyBanner() {
    return (
        <div className={style.container}>
            <h3>WHY BUY IN BEAUTY STORE? </h3>
            <div className={style.list}>
                <ul>
                    <ModalNew />
                    <ModalOrder />
                    <ModalOriginal />
                    <ModalPayment />
                </ul>
            </div>
        </div>
    )
}