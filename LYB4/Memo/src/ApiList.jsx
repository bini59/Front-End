import React from "react";
import axios from "axios";

import "./style/List.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const ApiList = () => {

    const [apiList, setApiList] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        // getDataFetch();
        getDataAxios();
    }, [])

    const getDataFetch = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/comments");
        let json = await response.json();
        json = json.slice(0, 10);
        setApiList(json);
    }

    const getDataAxios = async () => {
        let response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        let json = response.data;
        json = json.slice(0, 10);
        setApiList(json);
    }

    

    return (
        <>
            <h2>API 테스트 리스트</h2>
            {apiList.map(item => 
                <section className="memo-item">
                    <div className="memo-header">
                        <h3 class="memo-title">{item.name}</h3>
                        <div class="memo-member">{item.email.split("@")[0]}</div>
                    </div>
                    <p className="memo-content">{item.body}</p>
                </section>
            )}
        </>
        
    )
}

export default ApiList;