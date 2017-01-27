import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content3',
  };

  render() {
    return (
      <div
        {...this.props}
        className="content-template-wrapper"
      >
        <OverPack
          className={`content-template ${this.props.className}`}
          hideProps={{ h1: { reverse: true }, p: { reverse: true }, video: { reverse: true } }}
          location={this.props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
          >
            VIDEOS
          </TweenOne>
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
          >
            introduction
          </TweenOne>
          <TweenOne
            key="video"
            animation={{ y: '+=30', opacity: 0, type: 'from', delay: 300 }}
            className={`${this.props.className}-video`}
          >
            <VideoPlay loop src="https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4" width="100%" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
