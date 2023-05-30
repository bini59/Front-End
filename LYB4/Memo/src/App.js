import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Links, useParams } from "react-router-dom";

import './App.css';
import MemoEdit from './MemoEdit';
import MemoList from './MemoList';
import ApiList from './ApiList';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [data, setData] = useState([]);

  const onCreate = (title, content, member, ID) => {
    let id = data.length == 0 ? 1 : data[data.length - 1].id + 1;
    const newItem = { id: id, title: title, content: content, member: member };
    setData([newItem, ...data]);
    localStorage.setItem("MemoList", JSON.stringify([newItem, ...data]));
  }

  const onEdit = (title, content, member, id) => {
    let oldData = [...data];
    const newItem = { id: id, title: title, content: content, member: member };
    for (var i = 0; i < oldData.length; i++) if (oldData[i].id == id) oldData[i] = newItem;
    setData(oldData);
    localStorage.setItem("MemoList", JSON.stringify(oldData));
  }

  const onDelete = (id) => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;
    let oldData = [...data];
    for (var i = 0; i < oldData.length; i++) if (oldData[i].id == id) oldData.splice(i, 1);
    setData(oldData);
    localStorage.setItem("MemoList", JSON.stringify(oldData));
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
          <Route path="/edit/:id" element={<MemoEdit onCreate={onEdit} />} />
          <Route path="/" element={<MemoList list={data} onDelete={onDelete} />} >
            <Route path="apilist" element={<ApiList />} />
            <Route path="apilist/:id" element={<ApiList />} />
          </Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
