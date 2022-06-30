import style from './about.module.css';
import ReturnButton from '../ReturnButton/returnButton';

export default function About() {
    return (
        <div className={style.container}>
            <div className={style.button}>
                <ReturnButton />
            </div>
            <div className={style.text}>
                <p>We are a beauty online shop.</p>
                <p>Beauty Store was born in Madrid in 2002 to make happy people who loves make up, perfumes and cosmetics.
                    Our web have a wide variety of products, all of them great quality.
                    Every day we work to bring more products and brands.</p>
                <span>XOXO</span>
            </div>

        </div>
    )
}