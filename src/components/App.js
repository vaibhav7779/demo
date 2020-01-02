import React, { useState } from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

function App () {
    
    const [videos, handleVideo] = useState([]);
    const [selectedVideo, handleSelectedVideo] = useState(null);

    const handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        handleVideo(response.data.items);
        
    };
    return (
        <div class='ui container' style={{marginTop: '1em'}}>
            <SearchBar handleFormSubmit={handleSubmit}/>
            <div class='ui grid'>
                <div class="ui row">
                    <div class="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div class="five wide column">
                        <VideoList handleVideoSelect={handleSelectedVideo} videos={videos}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;