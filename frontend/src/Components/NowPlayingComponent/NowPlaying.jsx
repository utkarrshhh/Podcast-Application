import React from 'react'

import "./NowPlaying.css"

export default function NowPlaying() {
  return (
    <div className='nowPlayingDiv'>
      <div className="nowPlaying">
        <div className="playingImage">
          <img src="https://uploads-ssl.webflow.com/63a4333d6709521275441c77/6442da53d67d2638e4799a7d_Rectangle%20262.png" alt="" />
        </div>
        <div className="playingContent">
          <div className="palyingContentName">How are Indians living a happier life than any other countries?</div>
          <div className="playingBar">
            <div className="playingTime">
              <div className="currentlyAt">
                01:34
              </div>
              <div className="totalTime">
                08:45
              </div>
            </div>
            <div className="durationPlayed">
              <input type="range" />
            </div>
          </div>
          <div className="playingButtons">
            <div className="playPrevious">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.8" cx="15.1768" cy="15.1768" r="15.1768" transform="matrix(-1 0 0 1 30.366 0.457031)" fill="white"/>
                <path d="M9.36597 21.457C9.64931 21.457 9.88697 21.361 10.079 21.169C10.271 20.977 10.3666 20.7397 10.366 20.457V10.457C10.366 10.1737 10.27 9.93603 10.078 9.74403C9.88597 9.55203 9.64864 9.45637 9.36597 9.45703C9.08264 9.45703 8.84497 9.55303 8.65297 9.74503C8.46097 9.93703 8.36531 10.1744 8.36597 10.457V20.457C8.36597 20.7404 8.46197 20.978 8.65397 21.17C8.84597 21.362 9.08331 21.4577 9.36597 21.457ZM19.816 20.432C20.1493 20.6654 20.491 20.682 20.841 20.482C21.191 20.282 21.366 19.982 21.366 19.582V11.332C21.366 10.932 21.191 10.636 20.841 10.444C20.491 10.252 20.1493 10.2647 19.816 10.482L13.616 14.632C13.316 14.832 13.166 15.107 13.166 15.457C13.166 15.807 13.316 16.082 13.616 16.282L19.816 20.432Z" fill="#303030"/>
              </svg>
            </div>
            <div className="playPause">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.8" cx="21" cy="20.6341" r="20.6341" fill="#FF9800"/>
                <path d="M28.4576 19.5668C29.2789 20.041 29.2788 21.2264 28.4576 21.7005L18.1949 27.6257C17.3737 28.0998 16.3471 27.5071 16.3471 26.5588L16.3471 14.7085C16.3471 13.7602 17.3737 13.1675 18.1949 13.6417L28.4576 19.5668Z" fill="white"/>
              </svg>
            </div>
            <div className="playNext">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.8" cx="15.8111" cy="15.6338" r="15.1768" fill="white"/>
                <path d="M21.6343 21.457C21.3509 21.457 21.1133 21.361 20.9213 21.169C20.7293 20.977 20.6336 20.7397 20.6343 20.457V10.457C20.6343 10.1737 20.7303 9.93603 20.9223 9.74403C21.1143 9.55203 21.3516 9.45637 21.6343 9.45703C21.9176 9.45703 22.1553 9.55303 22.3473 9.74503C22.5393 9.93703 22.6349 10.1744 22.6343 10.457V20.457C22.6343 20.7404 22.5383 20.978 22.3463 21.17C22.1543 21.362 21.9169 21.4577 21.6343 21.457ZM11.1843 20.432C10.8509 20.6654 10.5093 20.682 10.1593 20.482C9.80928 20.282 9.63428 19.982 9.63428 19.582V11.332C9.63428 10.932 9.80928 10.636 10.1593 10.444C10.5093 10.252 10.8509 10.2647 11.1843 10.482L17.3843 14.632C17.6843 14.832 17.8343 15.107 17.8343 15.457C17.8343 15.807 17.6843 16.082 17.3843 16.282L11.1843 20.432Z" fill="#303030"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
