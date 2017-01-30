import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import firstURL from '../assets/thumbnail/assets/circle.png';

class Content extends React.Component {
  render() {
    return (
      <div id="INTRO">
        <OverPack
          replay
          playScale={[0.3, 0.1]}
          {...this.props}
          style={{ backgroundImage: '', backgroundColor: '#ea0909', borderStyle: 'none', borderColor: '#dc1515', borderWidth: '0px 0px 0px 2px', backgroundSize: 'cover', backgroundBlendMode: 'color-dodge' }}
          hideProps={{ icon: { reverse: true } }}
        >
          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            className={`${this.props.className}-wrapper`}
            key="text"
          >
            <span
              className="title"
              key="title"
              style={{ color: '#f3f2f2' }}
            >
              <img width="200px" height="200px" src={firstURL} alt='firstURL'/>
            </span>
            <p
              key="content"
              style={{ color: '#fefefe', fontSize: '200%' }}
            >
              ZHEHUI CAO
            </p>
          </QueueAnim>
          <TweenOne
            animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
            className={`${this.props.className}-icon`}
            key="icon"
          >
            <Icon type="down" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
