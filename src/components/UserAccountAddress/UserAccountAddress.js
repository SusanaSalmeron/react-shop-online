import style from './userAccountAddress.module.css';

export default function UserAccountAddress({ data }) {
    return (
        <div>

            <div className={style.data}>
                <p>{data.user_name} {data.surname}</p>
                <p>{data.address} {data.postalZip} {data.city} {data.country}</p>
            </div >
        </div>
    )
}