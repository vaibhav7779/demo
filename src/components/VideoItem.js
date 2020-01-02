import React from 'react';
import '../style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} class=' video-item item'>
            <img class='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div class='content'>
                <div class='header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;