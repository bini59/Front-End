import React from "react";
import ListItem from "./ListItem";

import "./style/List.css"
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

const MemoList = ({ list, onDelete }) => {

    const location = useLocation();
    useEffect(() => {
        console.log(location)
    }, [location])

    return (
        <div className="list-wrapper">
            <h2>리스트</h2>
            <div className="list-btn-wrapper">
                <Link to="/create"><button className="secondary-btn list-btn">메모 작성</button></Link>
                <Link to="/"><button className="secondary-btn list-btn">메모 보기</button></Link>
                <Link to="/apilist"><button className="secondary-btn list-btn">API 호출</button></Link>
            </div>
            <h4>{list.length}개의 메모가 저장되었습니다.</h4>
            
            <Outlet />
            {location.pathname == "/" ? <div className="memo-items">{list.map(item => <ListItem key={item.id} item={item} onDelete={onDelete} />)}</div> : <div></div>}
        </div>
    )
}

MemoList.defaultProps = { list: [] };

export default MemoList;