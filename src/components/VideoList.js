import React, { Component } from 'react';
import './styling/VideoList.scss'
import VideoCard from './VideoCard';



class VideoList extends Component {
    render() {  
        
               return (
            <div className="c3">
                {this.props.videos.map((v)=>{ return (
                     <div className="c4" key={v.snippet.publishedAt}>
                        <VideoCard setCurrentVideo={this.props.setCurrentVideo}   item={v}/>
                    </div>)})}
            </div>
        )
    }
}

export default VideoList;


