import React,{useState} from 'react'

import "./AudioPodcastCard.css"

export default function AudioPodcastCard(props) {
  const [play,setPlay]=useState("playShow")
  const [pause,setPause]=useState("pauseHidden")

  const element=localStorage.getItem("id")

  function play_pause(player) {
    var myAudio = document.getElementById(player);
    if (myAudio==null){
      return
    }
    if (myAudio.paused) {
      myAudio.play();
      setPlay("playHidden")
      setPause("pauseShow")
    }
    else {
      myAudio.pause();
      setPlay("playShow")
      setPause("pauseHidden")
    }
  }

  const favHandler=async()=> {
    const user=localStorage.getItem("id")
    await fetch('http://134.209.153.161:5000/file/setfavourite',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({user,song:props.id})
    });

    window.location.reload(true);

    // redirect("/fav")
    // setFav("Marked as Favourite")
  }

  console.log(JSON.stringify(props))

  return (
    <div className="audioPodcast">
      <div className="audioImage">
        <img src={props.image} alt="" />
      </div>
      <div className="audioText">
        <div className="audioCategory">
          {props.category}
        </div>
        <div className="audioHeading">
          <div className="audioHeadingText">
            {props.heading}
          </div>
          <div className="audioLogo">
            <audio src={props.source} id={props.id}/>
            <div className={play} onClick={()=>{
              play_pause(props.id)
            }} height="67" width="67">
            <svg
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.8" cx="33.5" cy="33.5" r="33.5" fill="#FF9800" />
              <path
                d="M45.6079 31.7679C46.9412 32.5377 46.9412 34.4622 45.6079 35.232L28.9461 44.8517C27.6128 45.6215 25.9461 44.6593 25.9461 43.1197L25.9461 23.8803C25.9461 22.3407 27.6128 21.3785 28.9461 22.1483L45.6079 31.7679Z"
                fill="white"
              />
            </svg>
            </div>

            <div className={pause} onClick={()=>{
              play_pause(props.id)
            }} height="67" width="67">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.8" cx="20.6341" cy="20.6341" r="20.6341" fill="#FF9800"/>
              <rect x="12" y="12" width="8" height="18" fill="#D9D9D9"/>
              <rect x="22" y="12" width="8" height="18" fill="#D9D9D9"/>
            </svg>
            </div>
          </div>
        </div>
        <div className="audioSubheading">
          {props.subHeading}
        </div>
        <div className="audioPodcastCreator">
          <div className="creatorName">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8C6.9 8 5.95834 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95834 0.391666 6.9 -9.53674e-07 8 -9.53674e-07C9.1 -9.53674e-07 10.0417 0.391666 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM14 16H2C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V13.2C1.69779e-06 12.6333 0.146002 12.1123 0.438002 11.637C0.730002 11.1617 1.11733 10.7993 1.6 10.55C2.63333 10.0333 3.68334 9.64567 4.75 9.387C5.81667 9.12833 6.9 8.99933 8 9C9.1 9 10.1833 9.12933 11.25 9.388C12.3167 9.64667 13.3667 10.034 14.4 10.55C14.8833 10.8 15.271 11.1627 15.563 11.638C15.855 12.1133 16.0007 12.634 16 13.2V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16ZM2 14H14V13.2C14 13.0167 13.954 12.85 13.862 12.7C13.77 12.55 13.6493 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5627 10.775 11.338C9.85833 11.1133 8.93334 11.0007 8 11C7.06667 11 6.14167 11.1127 5.225 11.338C4.30834 11.5633 3.4 11.9007 2.5 12.35C2.35 12.4333 2.229 12.55 2.137 12.7C2.045 12.85 1.99934 13.0167 2 13.2V14ZM8 6C8.55 6 9.021 5.804 9.413 5.412C9.805 5.02 10.0007 4.54933 10 4C10 3.45 9.804 2.979 9.412 2.587C9.02 2.195 8.54934 1.99933 8 2C7.45 2 6.979 2.196 6.587 2.588C6.195 2.98 5.99934 3.45067 6 4C6 4.55 6.196 5.021 6.588 5.413C6.98 5.805 7.45067 6.00067 8 6Z" fill="white"/>
            </svg>
            {props.creator}
          </div>
          <div className="creatorTime">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4ZM7.824 4H7.776C7.456 4 7.2 4.256 7.2 4.576V8.352C7.2 8.632 7.344 8.896 7.592 9.04L10.912 11.032C11.184 11.192 11.536 11.112 11.696 10.84C11.7362 10.7752 11.7629 10.703 11.7746 10.6277C11.7863 10.5524 11.7827 10.4755 11.764 10.4016C11.7453 10.3277 11.712 10.2583 11.6659 10.1975C11.6199 10.1368 11.5621 10.0859 11.496 10.048L8.4 8.208V4.576C8.4 4.256 8.144 4 7.824 4Z" fill="white"/>
            </svg>
            {props.time}
          </div>
          {/* {props.creator} */}
        </div>
      </div>
      {element?
      (<div className="audioFavourite" onClick={favHandler}>
        {
          props.isFav===true
          ?
          ("Marked as favourite")
          :
          ("Mark as favourite")
        }
      </div>)
      :
      <></>
    }
    </div>
  )
}
