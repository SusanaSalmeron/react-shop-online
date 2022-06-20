import CountDown from '../CountDown/countDown';
import style from './comingSoon.module.css';
import ReturnButton from '../ReturnButton/returnButton';


export default function ComingSoon() {
    const oneMonth = 30 * 24 * 60 * 60 * 1000;
    const actualDate = new Date().getTime();
    const dateTimeAfterOneMonth = actualDate + oneMonth;

    return (
        <div className={style.container}>
            <div className={style.button}>
                <ReturnButton />
            </div>
            <div className={style.count}>
                <h1>- Our blog is coming Soon - </h1>
                <CountDown targetDate={dateTimeAfterOneMonth} />
            </div>
        </div>
    );
}
