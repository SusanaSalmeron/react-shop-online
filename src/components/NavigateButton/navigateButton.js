import { useNavigate } from 'react-router-dom'


export default function NavigateButton({ name, label, route, onClick, classStyle }) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(route)
    }
    return (
        <button
            type="button"
            className={classStyle}
            name={name}
            route={route}
            label={label}
            onClick={onClick ? onClick : handleNavigate}
        >
            {label}
        </button>
    )
}