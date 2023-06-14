import React from 'react'
import ReactDOM from 'react-dom/client';
import './styles/Global.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Post } from './components/Post';
import { Menu } from './components/Menu';
import { Redirec } from './components/About';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/redirect" element={<Redirec />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
