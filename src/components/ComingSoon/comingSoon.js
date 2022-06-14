import CountDown from '../CountDown/countDown';
import style from './comingSoon.module.css';
import { useNavigate } from 'react-router-dom';



export default function ComingSoon() {
    const navigate = useNavigate()
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    const actualDate = new Date().getTime();

    const dateTimeAfterOneMonth = actualDate + oneMonth;

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <div className={style.container}>
            <div className={style.button}>
                <button onClick={handleNavigate}>return</button>
            </div>
            <div className={style.count}>
                <h1>- Our blog is coming Soon - </h1>
                <CountDown targetDate={dateTimeAfterOneMonth} />
            </div>
        </div>
    );
}
