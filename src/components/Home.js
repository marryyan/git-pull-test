import React, { Component, Fragment } from 'react';
import "../assets/style/Home.css"

var arr = [
  {
    "name": "斯大林之死",
    "image": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2386120724.jpg",
    "score": "8.1"
  },
  {
    "name": "大坏狐狸的故事",
    "image": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513435650.jpg",
    "score": "8.3"
  },
  {
    "name": "羞羞的铁拳",
    "image": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2499793218.jpg",
    "score": "7.1"
  },
  {
    "name": "乘风破浪",
    "image": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2408407697.jpg",
    "score": "6.8"
  },
  {
    "name": "驴得水",
    "image": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2393044761.jpg",
    "score": "8.3"
  },
]
class HomeMode extends Component {
  render() {
    const film = arr.map((item, index) => {
      return <div key={index} className="list">
        <a href="###" className="item">
          <div className="cover-wp">
            <img src={item.image} alt=""/>
          </div>
          <p>
            <span>{item.name}</span>
            <span>{item.score}</span>
          </p>
        </a>
              </div>
    })
    return (
      <div>
        {film}
      </div>
    )
  }
}



export default HomeMode;
