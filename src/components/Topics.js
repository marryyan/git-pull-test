import React, { Component, Fragment } from 'react';

class Topics extends Component {
  render() {
    return (
      <div className="content">
        <h2>选电影</h2>
        <ul>
          <li>热门</li>
          <li>最新</li>
          <li>经典</li>
          <li>可播放</li>
          <li>豆瓣高分</li>
          <li>冷门佳片</li>
          <li>华语</li>
          <li>欧美</li>
          <li>韩国</li>
          <li>日本</li>
          <li>动作</li>
          <li>喜剧</li>
          <br/>
          <li>爱情</li>
          <li>科幻</li>
          <li>悬疑</li>
          <li>恐怖</li>
          <li>文艺</li>
        </ul>
        <div className="xian"></div>
        <div className="tool">
          <div className="sort">
            <label >
              <input type="radio"/>
              按热度排序
            </label>
            <label >
            <input type="radio"/>
              按时间排序
            </label>
            <label >
            <input type="radio"/>
              按评价排序
            </label>
          </div>
          <div className="check">
          <label >
            <input type="checkbox"/>
            我没看过的
          </label>
          <label >
          <input type="checkbox"/>
            可在线播放
          </label>
          </div>
        </div>
        <div className="list-wp">
          <div className="list">
            <a href="" className="item">
              <div className="cover-wp">
                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2411622421.jpg" alt=""/>
              </div>
              <p>
                降临
                <strong>7.7</strong>
              </p>
            </a>
            <a href="" className="item">
              <div className="cover-wp">
                <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.jpg" alt=""/>
              </div>
              <p>
                银翼杀手2049
                <strong>8.3</strong>
              </p>
            </a>
            <a href="" className="item">
              <div className="cover-wp">
                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455261804.jpg" alt=""/>
              </div>
              <p>
                银河护卫队2
                <strong>8.1</strong>
              </p>
            </a>
            <a href="" className="item">
              <div className="cover-wp">
                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2459944375.jpg" alt=""/>
              </div>
              <p>
                异形： 契约
                <strong>7.3</strong>
              </p>
            </a>
            <a href="" className="item">
              <div className="cover-wp">
                <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2352321614.jpg" alt=""/>
              </div>
              <p>
                X战警： 天启
                <strong>7.7</strong>
              </p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Topics;
