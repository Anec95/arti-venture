import { NavLink } from "react-router-dom"
import { useState } from "react"
import { dataBtnList } from "../../../../../../../Data/dataBtn"

export default function ComplexButton(props) {
    const [listShow, setListShow] = useState(false)

    function toggleShowList() {
        setListShow(prevState => !prevState)
    }

    return (
        <div className="menu-element">
            <div className="title-menu-container">
                <NavLink
                    to={dataBtnList[props.arrayNumber].btnPathName}
                    className= "title-menu"
                >
                    {dataBtnList[props.arrayNumber].btnName}
                </NavLink>
                <span
                    onClick={toggleShowList}
                    className="material-icons-outlined expand-icon"
                >
                    {listShow ? "expand_more" : "navigate_next"}
                </span>   
            </div>
           {listShow &&
                <div className="list-menu">
                    {dataBtnList[props.arrayNumber].list.map(data => {
                            return (
                                <NavLink
                                    to={data.listPathName}
                                    key={data.idList}
                                    className= "list-element"
                                >
                                    {data.listName}
                                </NavLink>
                            )
                        }
                    )}                    
                </div>
            }
            
        </div>
    )
}



                                                        
    
