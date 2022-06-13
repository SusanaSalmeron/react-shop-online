import style from './dateTimeDisplay.module.css'


const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? style.danger : style.count}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;
