import React, { Component } from 'react';
import './styling/CurrentVideo.scss';

class CurrentVideo extends Component {
    render() {
       
        if (this.props.CurrentVideo == null) {return <div> youtube api request is denied </div>}
        
        else {
            const snippet = this.props.CurrentVideo.snippet;
            return (
            <div className="c6" >
               <iframe 
                title="video"
                src={`https://www.youtube.com/embed/${this.props.CurrentVideo.id.videoId}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                >
                </iframe>
                <h3 >{snippet.title}</h3>
                <small>{snippet.publishedAt.slice(0,10)}</small>
                <div className="ui divider"></div>
                <i className="video icon big red"></i>
                <b> {snippet.channelTitle} </b>
                <p>{snippet.description}</p>
            </div>
        )}
    }
}

export default CurrentVideo;


