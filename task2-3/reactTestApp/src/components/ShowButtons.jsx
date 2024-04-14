import React, { useState } from "react";
import '../App.css'
import { PostList } from "./PostList";


export const ShowButton = ({posts}) => {
    const [value, setValue] = useState("Убрать все");
    const [showing, setShowing] = useState(true);
    const [data, setData] = useState(posts)

    const More50 = () => {
        setData(posts.filter(item => item.progress >= 50))
    }

    const Less50 = () => {
        setData(posts.filter(item => item.progress < 50))
    }


    const ShowOrHide = () => {
        if(showing) {
            setShowing(false);
            setValue("Показать все");
            
        }
        else {
            setShowing(true);
            setValue("Убрать все")
        }
    }
    

    return (
        <div>
            <div className="container">
                <button className = "Button" onClick={ShowOrHide}>{value}</button>
                <button className = "Button" onClick={More50}>Показать больше 50%</button>
                <button className = "Button" onClick={Less50}>Показать меньше 50%</button>
            </div>
            {showing && <PostList posts = {data}/>}
        </div>
    )
}