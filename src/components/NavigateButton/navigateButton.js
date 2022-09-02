import { useNavigate } from 'react-router-dom'
import style from './navigateButton.module.css'

export default function NavigateButton({ name, label, route, onClick, className, id, isbilling }) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(route)
    }
    return (
        <button
            id={id}
            type="button"
            name={name}
            route={route}
            label={label}
            onClick={onClick ? onClick : handleNavigate}
            className={className ? className : style.button}
            isbilling={isbilling}
        >
            {label}
        </button>
    )
}