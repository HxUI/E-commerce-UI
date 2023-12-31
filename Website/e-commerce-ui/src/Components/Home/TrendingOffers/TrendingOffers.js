import {Swiper, SwiperSlide} from "swiper/react";

import './TrendingOffers.css'
import {EffectCoverflow} from "swiper/modules";
import Button from "../../Ui/Button/Button";
import {TrendingOffersData} from "../../ProductsData";

const TrendingOffers = ()=>{

    return(
        <div className={'TrendingOffers'}>
            <h2 id={"title"}>Trending offers</h2>
            <Swiper
                breakpoints={
                    {
                        768: {
                            slidesPerView: 2,
                            coverflowEffect:{stretch: -250}
                        }
                    }
                }
                modules={[EffectCoverflow]}
                effect={'coverflow'}
                slidesPerView={1}
                initialSlide={1}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -50,
                    depth: 400,
                    modifier: 1,
                    slideShadows: false,
                }}
            >
                {
                    TrendingOffersData.map(item=>(
                        [<SwiperSlide key={item.id}>
                            <div className={'TrendingOffer'}>
                                <div id={"OfferDetails"}>
                                    <img src={item.BrandImgSrc} alt={"brand"}  loading={"lazy"}/>
                                    <h2>{item.PunchLine}</h2>
                                    <Button lightMode={true} href="../Pages/Products.js">Explore</Button>
                                </div>
                                <img id={"CoverImg"} src={item.ImgSrc} alt={"offer"}/>
                            </div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
        </div>
    )
}

export default TrendingOffers