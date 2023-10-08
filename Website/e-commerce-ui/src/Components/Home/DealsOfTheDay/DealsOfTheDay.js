import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import './DealsOfTheDay.css'
import {Scrollbar} from "swiper/modules";
import {DealsOfTheDayData} from "../../ProductsData";

const TrendingNow = ()=>{
    return(
        <div className={'DealsOfTheDay'}>
            <h2 id={"title"}>Deals of theDay</h2>
            <Swiper
                breakpoints={{
                    320:{
                        slidesPerView: 1,
                        spaceBetween: -40,
                    },
                    480:{
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: -40,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },

                }}
                modules={[Scrollbar]}
                centeredSlides={true}
                spaceBetween={-100}
                slidesPerView={3}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    DealsOfTheDayData.map(item=>(
                        [<SwiperSlide key={Math.random()}>
                            <div className={'DealOfTheDay'}>
                                <img src={item.ImgSrc} alt={"item"} loading={"lazy"}/>
                                <img src={item.BrandImgSrc} alt={"item"} loading={"lazy"}/>
                                <h2>{item.Title}</h2>
                                <h4>{item.PriceTag}</h4>
                            </div>
                            <div className="swiper-lazy-preloader"></div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
        </div>
    )
}

export default TrendingNow