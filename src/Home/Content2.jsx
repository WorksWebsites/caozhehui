import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

const group2URL = './series_show/group2.html';
import group2_3 from '../assets/thumbnail/worksetBg/group2/3.jpg';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  handleClick() {
    window.location.href=group2URL;
  }

  render() {
    const childrenData = [
      { children: { title: { children: 'RELATIONS - GROUPE ET LA VILLE' }, content: { children: 'ZHEHUI CAO' }, button: { children: 'Learn More' } } },
    ];
    const defaultImg = [
      group2_3,
    ];
    const childrenToRender = childrenData.map((item, i) => {
      const children = item.children;
      const isImg = children.title.children
        .match(/\.(gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/);
      return (<Element
        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className="bg"
          key="bg"
          style={children.bg && children.bg.style || {
            backgroundImage: `url(${defaultImg[i]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim
          type={['bottom', 'top']} delay={200}
          className={`${this.props.className}-title`} key="text"
          style={children.wrapper && children.wrapper.style}
        >
          <span
            className="logo" key="logo"
            style={children.title.style}
          >
            {isImg ?
              (<img width="100%" src={children.title.children} />) :
              (<h1>{children.title.children}</h1>)
            }
          </span>
          <p
            key="content"
            style={children.content.style}
          >
            {children.content.children}
          </p>
          <Button
            type="ghost"
            key="button"
            onClick={this.handleClick}
            style={children.button.style}
          >
            {children.button.children}
          </Button>
        </QueueAnim>
      </Element>);
    });
    return (
      <TweenOne animation={{ opacity: 0, type: 'from' }}>
        <span id="PROJET 2"></span>
        <OverPack
          {...this.props}
          hideProps={{ icon: { reverse: true } }}
        >
          <BannerAnim autoPlay autoPlaySpeed={3000}
            key="banner1"
          >
            {childrenToRender}
          </BannerAnim>
          <TweenOne
            animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
            className={`${this.props.className}-icon`}
            style={{ bottom: 40 }}
            key="icon"
          >
            <Icon type="down" />
          </TweenOne>
        </OverPack>
      </TweenOne>
    );
  }
}

Banner.propTypes = {
  className: PropTypes.string,
};

Banner.defaultProps = {
  className: 'banner1',
};

export default Banner;
