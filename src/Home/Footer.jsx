import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Footer extends React.Component {
  static propTypes = {
    dataSource: React.PropTypes.object,
  };

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    return (<OverPack
      {...this.props}
      playScale={0.05}
      hideProps={{ footer: { reverse: true } }}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <p style={{paddingTop:"10px"}}>Zhehui CAO © 2015-2016</p>
        <div style={{textAlign:"center",margin:"10px"}}>
          <p>Telephone: &nbsp;+86 13720077277</p>
          <p>E-Mail: &nbsp;winneralancao@163.com</p>
          <p>WebSite: &nbsp; www.zhehuicao.cn</p>
        </div>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
