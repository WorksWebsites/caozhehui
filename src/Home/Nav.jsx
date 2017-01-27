import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu, Icon } from 'antd';

const Item = Menu.Item;

class Header extends React.Component {
  render() {
    const navData = { menu1: 'INTRO', menu2: 'PROJECT', menu3: 'VIDEO', menu4: 'CASE' };
      const navChildren = Object.keys(navData).map((key) => {
        return (<Item key={key}>
          {navData[key]}
        </Item>);
    });
    return (<TweenOne
      component="header"
      animation={{ opacity: 1, type: 'from' }}
      {...this.props}
      style={{ backgroundColor: 'rgba(255, 0, 0, 1)', boxShadow: '10 0px 0px rgba(255, 255, 255, 1)' }}
    >
      <TweenOne
        className={`${this.props.className}-user`}
        animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
        style={{ margin: '0px 4% 0px 0px' }}
      >
        <a href="" className="user">
          <span className="img">
            <img
              src="http://media.caozhehui.cn/caozhehui_works/assets/caozhehui.png"
              width="30"
              height="30"
            />
          </span>
          <span>ZHEHUI CAO</span>
        </a>
      </TweenOne>
      <TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" defaultSelectedKeys={['a']}
        >
          {navChildren}
        </Menu>
      </TweenOne>
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: 'header1',
};

export default Header;
