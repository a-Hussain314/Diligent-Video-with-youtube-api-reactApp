import React, { Component } from 'react';
import './styling/VideoCard.scss';

class VideoCard extends Component {

    render() {
        const snippet = this.props.item.snippet;
        const link = () => {this.props.setCurrentVideo(this.props.item)}
        return (
            <div>
                <img  
                    className="ui top aligned tiny image" 
                    alt={snippet.describtion} 
                    src={snippet.thumbnails.medium.url}
                    onClick={link}
                />
            <div className="c5">
                <span className="title" onClick={link}>{snippet.title}</span><br/>
                <small>{snippet.channelTitle}</small></div>
            </div>
        );
    }
}

export default VideoCard;




