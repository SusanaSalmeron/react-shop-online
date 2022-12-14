import style from './cart.module.css'


export default function Cart() {
    return (
        <div className={style.container}>
            <h3>WHAT'S IN MY CART</h3>
            <div className={style.tags}>
                <div className={style.tag}>PRODUCT</div>
                <div className={style.tag}>QTY.</div>
                <div className={style.tag}>PRICE</div>
            </div>
            <div className={style.shopping}>
                <div className={style.content}> <button><i className="fa-solid fa-x"></i></button>Revolution - *The School For Good & Evil X Revolution* - Eau de toilette - Evers</div>
                <div className={style.content}>1</div>
                <div className={style.content}>12,00€</div>
            </div>
            <div className={style.shopping}>
                <div className={style.content}>
                    <button><i class="fa-solid fa-x"></i></button>
                    Revolution - *The School For Good & Evil X Revolution* - Eau de toilette - Evers</div>
                <div className={style.content}>1</div>
                <div className={style.content}>12,00€</div>
            </div>
            <div className={style.total}>
                <div className={style.totalcontent}>TOTAL: </div>
                <div className={style.price}>24,00€</div>
                <div className={style.notation}>(SHIPPING NOT INCLUDED)</div>
            </div>
        </div>
    )
}