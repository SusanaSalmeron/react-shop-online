

export default function SubmitButton({ disabled, label, onClick, name }) {
    return (
        <button
            type="submit"
            disabled={disabled}
            onClick={onClick}
            name={name}
        >
            {label}
        </button>
    )
} 