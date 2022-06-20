import style from './about.module.css';
import ReturnButton from '../ReturnButton/returnButton';

export default function About() {
    return (
        <>
            <div className={style.button}>
                <ReturnButton />
            </div>
            <div className={style.container}>
                <p>We are a beauty online shop.</p>
                <p> Beauty Store was born in Madrid in 2002 to make happy people who loves make up, perfumes and cosmetics.</p>
                <p>Our web have a wide variety of products, all of them great quality.</p>
                <p>Every day we work to bring more products and brands.</p>
            </div>
        </>
    )
}