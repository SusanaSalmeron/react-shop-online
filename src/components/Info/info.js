import style from './info.module.css';
import rare from '../../images/rare.jpg';
import colourpop from '../../images/colourpop.jpg';
import nyx from '../../images/nyx.png';
import nd from '../../images/nd.webp'
import NavigateButton from '../NavigateButton/navigateButton';



export default function Info() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <figure>
                    <img src={nd} alt="Natasha Denona"></img>
                    <h3>Brand of the Month</h3>
                    <p>Discover this month brand and try his iconics makeup products</p>
                    <NavigateButton
                        id="denona"
                        name="denona"
                        route={'/search/Natasha Denona'}
                        label="DISCOVER"
                    />
                </figure>
            </div>
            <div className={style.content}>
                <figure>
                    <img src={rare} alt="Rare Beauty"></img>
                    <h3>Rare Beauty</h3>
                    <p>Together we’re building a safe, welcoming space in beauty and beyond. This is makeup made to feel good in, without hiding what makes you unique. And it’s all vegan and cruelty free.</p>
                    <NavigateButton
                        id="rare"
                        name="rare"
                        route={'/search/Rare Beauty'}
                        label="DISCOVER"
                    />                </figure>
            </div>
            <div className={style.content}>
                <figure>
                    <img src={colourpop} alt="Colourpop"></img>
                    <h3>Colourpop</h3>
                    <p>It's our mission to redefine luxury beauty by creating amazing products at prices that don't break the bank. Dedicated to newness at lightning speed, we imagine, develop, test, and manufacture all under one roof. We pride ourselves on being cruelty-free, wallet-friendly, and keeping our customers at the center of our world</p>
                    <NavigateButton
                        id="colourpop"
                        name="colourpop"
                        route={'/search/colourpop'}
                        label="DISCOVER"
                    />                </figure>
            </div>
            <div className={style.content}>
                <figure>
                    <img src={nyx} alt="Nyx"></img>
                    <h3>Nyx</h3>
                    <p>With legions of die-hard devotees, NYX Professional Makeup is consistently one of our most-searched for brands .This phenomenal make up range straddles high street and high-end with hardworking make up brushes, long-wearing bases, buttery lip gloss, indelible liquid lipsticks and rainbow-bright eyeliners – all with purse-friendly price tags! Don't forget their ultra-affordable tools and make up sponges too!</p>
                    <NavigateButton
                        id="nyx"
                        name="nyx"
                        route={'/search/Nyx'}
                        label="DISCOVER"
                    />                </figure>
            </div>
        </div>
    )
}