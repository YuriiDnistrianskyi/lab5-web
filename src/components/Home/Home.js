import React from "react";
import "./homeStyle.css";
import BlockItem from "../../items/BlockItem/BlockItem";


function Home() {
    return(
        <>
            <section className="container top">
                <div className="container__heading">
                    <div className="container__heading-img"></div>
                    <div className="container__heading-content">
                        <div className="container__heading-text">
                            <h1>Stadiums</h1>
                            <div>Football stadiums are more than just venues for matches; they are the epicenter of emotions and stories, where thousands of fans gather to support their teams. Each stadium has its unique character and atmosphere, from ultra-modern arenas to legendary grounds that hold memories of historic matches</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <form className="container__form">
                    <div className="container__list">
                        <BlockItem name="Arena Lviv" audience="15000" lightingPower="2000" srcImg="https://i0.wp.com/photo-lviv.in.ua/wp-content/uploads/2019/02/arena.jpg?fit=1280%2C849&ssl=1"></BlockItem>
                        <BlockItem name="Donbas Arena" audience="20000" lightingPower="2200" srcImg="https://pictures.ua.tribuna.com/image/3c61e832-6e81-466d-b540-85d56a5e31b7?width=1260&quality=70"></BlockItem>
                        <BlockItem name="NSK 'Olimpiyskiy'" audience="25000" lightingPower="2500" srcImg="https://vechirniy.kyiv.ua/uploads/2022/08/12/483.jpg"></BlockItem>
                    </div>
                    <div className="container__button">
                        <button>View more</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Home;
