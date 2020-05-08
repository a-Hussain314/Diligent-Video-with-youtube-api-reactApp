import React, { Component } from 'react';
import axios from 'axios';
import './styling/App.scss'
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import CurrentVideo from './CurrentVideo';



class App extends Component {
    state = {
        videos : [],
        CurrentVideo : null
    }

    componentDidMount() {
         this.onFormSubmit("");
    }

   onFormSubmit = (input) => {
    //    console.log(input)
      this.youtube_search_api(input);
   }

   
   setCurrentVideo = (video_object) => {
       this.setState({CurrentVideo:video_object})
   } 

 

   youtube_search_api =  async(input) => {
    await axios.get("https://www.googleapis.com/youtube/v3/search" ,
    {params : { part :"snippet", maxResults: 10, key:"add your youtube api key", q:input}}
    ).then((res)=>{
        console.log(res.data.items);
        this.setState({videos: res.data.items });
        this.setCurrentVideo(res.data.items[Math.floor(Math.random()*10)])
     })
   }
    
    render() {
       
        return (
            <div>
                
                <SearchBar delivery={this.onFormSubmit}/>
                <div className="c1">
                <CurrentVideo CurrentVideo={this.state.CurrentVideo}/>
                <VideoList setCurrentVideo={this.setCurrentVideo} videos={this.state.videos}/>
                 </div>
            </div>
        );
    }
}

export default App;


