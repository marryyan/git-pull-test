import React, { Component, Fragment } from 'react';
import about from "../assets/style/about.css"

class AboutMode extends Component {
  render() {
    const contents = Love.map((item, index) =>
      <div className="LV-content" key={index}>
        <div className="LV-content-top">
          <img src={item.img} alt=""/>  
        </div>
        <div className="LV-content-footer">
          <p>
            <span className="span-left">{item.title}</span>
            <span className="span-right">{item.score}</span>
          </p>
        </div>
      </div>
    );
    return (
      <div>
        <div className="content">{contents}</div>
      </div>
    )
  }
}

var Love = [
  {
    "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2381697408.jpg",
    "title": "你的短信",
    "score": "7.0"
  },
  {
    "img": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2395733377.jpg",
    "title": "你的名字",
    "score": "8.0"
  },
  {
    "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2425658570.jpg",
    "title": "爱乐之城",
    "score": "8.3"
  },
  {
    "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505525050.jpg",
    "title": "请以你的名字呼唤我",
    "score": "8.9"
  },
  {
    "img": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2378140502.jpg",
    "title": "七月与安生",
    "score": "7.6"
  },
]

export default AboutMode;
