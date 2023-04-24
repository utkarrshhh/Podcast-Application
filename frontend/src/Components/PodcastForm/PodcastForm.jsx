import React from 'react'
import "./PodcastForm.css"

export default function PodcastForm() {
  return (
    <form className='podcastForm' action="http://localhost:5000/file/upload" method="post" enctype="multipart/form-data">
        <div className="podcastName">
            <label htmlFor="podcastNameInput" className='podcastNameLabel'>Podcast Name</label>
            <input type="text" placeholder='Name of the podcast' id='podcastNameInput' name="name"/>
        </div>
        <div className="podcastDescription">
            <label htmlFor="podcastDescriptionInput" className='podcastDecriptionLabel'>Decription of the Podcast</label>
            <input type="text" placeholder='Short description of the podcast' id='podcastDescriptionInput' name="description"/>
        </div>
        <div className="podcastAuth">
            <label htmlFor="podcastAuthInput" className='podcastAuthLabel'>Author of Podcast</label>
            <input type="text" placeholder='Author Name' id='podcastAuthInput' name="author"/>
        </div>
        <div className="podcastType">
            <label htmlFor="podcastTypeInput" className='podcastTypeLabel'>Podcast Type</label>
            <select name="category" id="podcastTypeInput">
                <option value="audio">Audio</option>
                <option value="video">Video</option>
            </select>
        </div>
        <div className="podcastFile">
            <label htmlFor="podcastFileInput" className='podcastFileLabel'>Audio/Video file</label>
            <input type="file" name="file"id='podcastFileInput' accept='audio/mp3,video/mp4'/>
        </div>
        <div className="podcastThumbnail">
            <label htmlFor="podcastThumbnailInput" className="podcastThumbnailLabel">Podcast Thumbnail</label>
            <input type="file" name='thumbnail' id='podcastThumbnailInput' accept='.jpg' />
        </div>
        <div className="podcastSubmit">
            <button type='submit'>Upload</button>
        </div>
    </form>
  )
}
