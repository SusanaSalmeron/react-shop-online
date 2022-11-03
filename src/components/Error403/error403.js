import style from './error403.module.css';
import NavigateButton from '../NavigateButton/navigateButton';


export default function Error403() {
    return (
        <div className={style.error}>
            <h1>403 - ACCESS DENIED</h1>
            <h3>YOU DON'T HAVE PERMISSION TO ACCES THIS PAGE</h3>
            <NavigateButton
                route={'/home'}
                label="Go to Home"
            />
        </div>
    )
}