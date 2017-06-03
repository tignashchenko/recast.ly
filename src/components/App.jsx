class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]      
    };
    this.updateVideoPlayerWhenClicked = this.updateVideoPlayerWhenClicked.bind(this);
  }

  // componentDidMount() {
  //   this.setState({videos: window.exampleVideoData, currentVideo: window.exampleVideoData[4]});
    
  // }

  updateVideoPlayerWhenClicked(videoTitle) {
    this.setState({currentVideo: videoTitle});
  }

  render() {
    return (
        <div>
          <Nav />
          <div className="col-md-7">
           <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
           <VideoList videos={this.state.videos}
           onUpdatePlayerWhenClicked={this.updateVideoPlayerWhenClicked}  
          />
        </div>
      </div>
    );
  }
} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
