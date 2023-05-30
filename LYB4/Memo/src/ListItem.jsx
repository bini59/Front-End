import React from "react";

import "./style/List.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item, onDelete }) => {

    useEffect(() => {
        return () => {
            console.log("리스트 아이템 컴포넌트가 화면에서 사라짐");
        }
    })
    

    return (
        <section className="memo-item">
            <div className="memo-header">
                <div className="memo-info">
                    <h3 class="memo-title">{item.title}</h3>
                    <div class="memo-member">{item.member}</div>
                </div>
                <div className="memo-btns">
                    <Link to={`/edit/${item.id}`}><div><img src="/image/edit.svg" /></div></Link>
                    <div onClick={e=>onDelete(item.id)}><img src="/image/delete.svg" /></div>
                </div>
            </div>
            <p className="memo-content">{item.content}</p>
            
        </section>
    )
}

export default ListItem;