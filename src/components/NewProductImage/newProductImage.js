import { useNavigate } from "react-router-dom";
import style from './newProductImage.module.css'

export default function NewProductImage({ src, name, value }) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/product/${value}`)
    }

    return (
        <>
            <img
                src={src}
                alt={name}
                className={style.image}
                key={value}
                value={value}
                onClick={handleNavigate} />
        </>
    )
}