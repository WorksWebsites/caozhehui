import React from 'react';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

  getChildrenToRender = data =>
    data.map((item, i) => {
      const children = item.children;
      return (<li
        key={i}
        style={item.style}
      >
        <div className="content-wrapper" style={children.wrapper && children.wrapper.style}>
            <span style={children.img.style}>
              {window.innerWidth > 500 ?
                <img src={children.img.children} height="100%" alt="exec"/> :
                <img src={children.img.children} width="100%"  alt="exec"/>
              }
            </span>
          <p style={children.content.style}>
            {children.content.children}
          </p>
        </div>
      </li>);
    });

  getEnterAnim = (e) => {
    const index = e.index;
    const delay = index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const dataArray = [
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L1.jpg' }, content: { children: 'EXERCICE 1' } } },
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L2.jpg' }, content: { children: 'EXERCICE 2' } } },
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L3.jpg' }, content: { children: 'EXERCICE 3' } } },
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L4.jpg' }, content: { children: 'EXERCICE 4' } } },
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L5.jpg' }, content: { children: 'EXERCICE 5' } } },
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L6.jpg' }, content: { children: 'EXERCICE 6' } } },
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L7.jpg' }, content: { children: 'EXERCICE 7' } } },
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L8.jpg' }, content: { children: 'EXERCICE 8' } } },
      { children: { img: { children: 'http://media.zhehuicao.cn/caozhehui_works/worksetBg/exec_thumb/L9.jpg' }, content: { children: 'EXERCICE 9' } } },
    ];
    const childrenToRender = this.getChildrenToRender(dataArray);
    return (
      <div
        {...this.props}
        className="content-template-wrapper content4-wrapper"
      >
        <OverPack
          className={`content-template ${this.props.className}`}
          hideProps={{ h1: { reverse: true }, p: { reverse: true } }}
          location={this.props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            style={{ margin: '0px 0px 0px 0px', top: '5%', color: '#fff' }}
          >
            EXERCICE 1 - 9
          </TweenOne>
          <TweenOneGroup
            className={`${this.props.className}-img-wrapper`}
            component="ul"
            key="ul"
            enter={this.getEnterAnim}
            leave={{ y: '+=30', opacity: 0 }}
          >
            {childrenToRender}
          </TweenOneGroup>
        </OverPack>
      </div>
    );
  }
}


export default Content;
