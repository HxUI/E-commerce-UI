import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import './ProductCards.css'
const ProductCards = ({ImgSrc, ItemName, BrandName, score, OfferPrice, ActualPrice}) =>{

    return(
        <div className={'ProductCard'}>
            <img src={ImgSrc} alt={"item"}/>
            <h3 id={"itemName"}>{ItemName}</h3>
            <div id={"Section1"}>
                <h4>{BrandName}</h4>
                <p>{score}
                    <FontAwesomeIcon id={"icon"} icon={faStar} />
                </p>
            </div>
            <div id={'Section2'}>
                <h3 id={"priceData"}>{`Rs. ${OfferPrice}`}</h3>
                <h4 id={"priceData"} className={"actual"}>{`Rs. ${ActualPrice}`}</h4>
                <p id={"priceData"}>{`(${((ActualPrice-OfferPrice)/ActualPrice)*100}% off)`}</p>
            </div>
        </div>
    )
}
export default ProductCards