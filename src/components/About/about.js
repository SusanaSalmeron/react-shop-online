import { useNavigate } from 'react-router-dom';
import style from './about.module.css';

export default function About() {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <>
            <div className={style.button}>
                <button onClick={handleNavigate}>
                    return
                </button>
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