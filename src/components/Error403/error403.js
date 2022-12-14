import style from './error403.module.css';
import NavigateButton from '../NavigateButton/navigateButton';


export default function Error403() {
    return (
        <div className={style.error}>
            <h1>403 - ACCESS DENIED</h1>
            <h3>YOU DON'T HAVE PERMISSION TO ACCESS THIS PAGE</h3>
            <h3>YOUR SESSION HAS EXPIRED, PLEASE LOG IN</h3>
            <NavigateButton
                route={'/home'}
                label="Go to Home"
            />
        </div>
    )
}