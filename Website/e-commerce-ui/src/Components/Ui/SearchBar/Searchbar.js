import './SearchBar.css'
import {HiMagnifyingGlass} from "react-icons/hi2";
const Searchbar = () =>{
    return(
        <div className={"SearchBar"}>
            <input id={"InputField"} type={"text"} placeholder={"Search"}/>
            <HiMagnifyingGlass id={"icon"}/>
        </div>
    )
}
export default Searchbar