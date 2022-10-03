import style from './returnButton.module.css';
import { useNavigate } from 'react-router-dom';


export default function ReturnButton(onClick) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <button
            type="text"
            className={style.button}
            onClick={handleNavigate}>
            Return
        </button>
    )
}