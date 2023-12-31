import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import 'swiper/css/navigation';
import './CommentsHome.css'
import {commentData, renderStars} from "../../ProductsData";
const CommentsHome = () => {

    return (
        <div className={'Comments'}>
            <h2>What Our Customers Say</h2>
            <Swiper
                breakpoints={{
                    340:{
                        slidesPerView:1,
                        spaceBetween:60
                    },
                    540:{
                        slidesPerView:1,
                        spaceBetween:10
                    },
                    768:{
                        slidesPerView:2,
                        spaceBetween:50
                    }

                }
                }
                modules={[Navigation]}
                initialSlide={1}
                navigation={true}
                slidesPerView={1}
                centeredSlides={true}
                grabCursor={true}
            >
                {
                    commentData.map(comment => (
                        [<SwiperSlide key={comment.id}>
                            <div className={'Comment'}>
                                <img src={comment.profileImg} alt={"item"} loading={"lazy"}/>
                                <div id={"Section1"}>
                                    <p>{comment.stars}
                                        {renderStars(comment.stars)}
                                    </p>
                                </div>
                                <p id={"text"}>{comment.text}</p>
                            </div>
                            <div className="swiper-lazy-preloader"></div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
        </div>
    )
}
export default CommentsHome