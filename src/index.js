import React from 'react';
import ReactDOM from 'react-dom';

// less文件引入
import "@/components/details/Less/reset.less";
import "@/components/details/Less/Particular.less";

// 组件引入
import  Header  from "@/components/details/commonModule/header.js";
import Particular from '@/components/details/Particular';
import Footer from '@/components/details/commonModule/footer.js';

ReactDOM.render(
    <div>
      <Header></Header>
      <Particular />
      <Footer></Footer>
    </div>
  , document.getElementById('root'));


