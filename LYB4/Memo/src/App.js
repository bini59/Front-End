import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Links, useParams } from "react-router-dom";

import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';
import ApiList from './ApiList';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [data, setData] = useState([]);

  const onCreate = (title, content, member) => {
    const newItem = { title: title, content: content, member: member };
    setData([newItem, ...data]);
    localStorage.setItem("MemoList", JSON.stringify([newItem, ...data]));
  }

  const darkMode = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    let text = isDark ? "다크모드 활성화" : "다크모드 비활성화";
    console.log(text);
  }, [isDark]);

  useEffect(() => {
    const localData = localStorage.getItem("MemoList") ?? '[]';
    setData(JSON.parse(localData));
  }, []);

  return (
    <BrowserRouter>
    <div className={"App " + (isDark ? "darkmode" : "")}>
        <button onClick={darkMode}>{isDark ? '🌝' : '🌚'}</button>
        <Routes>
          <Route path="/create" element={<MemoEdit onCreate={onCreate} />} />
          <Route path="/" element={<MemoList list={data} />} >
            <Route path="apilist" element={<ApiList />} />
            <Route path="apilist/:id" element={<ApiList />} />
          </Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
