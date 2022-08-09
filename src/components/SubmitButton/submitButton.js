import style from './submitButton.module.css'

export default function SubmitButton({ disabled, label, onClick, name, className }) {
    return (
        <button
            type="submit"
            disabled={disabled}
            onClick={onClick}
            name={name}
            className={className ? className : style.button}
        >
            {label}
        </button>
    )
} 