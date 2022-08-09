import style from './userAccountAddress.module.css';

export default function UserAccountAddress({ data }) {
    return (
        <div>

            <div className={style.data}>
                {data.billing_address ? <p>{data.billing_address} {data.postalZip} {data.city} {data.country}</p> : <p>{data.address} {data.postalZip} {data.city} {data.country}</p>}

            </div >
        </div>
    )
}