import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { Menu, Icon } from 'antd';

const Item = Menu.Item;
import headURL from '../assets/thumbnail/assets/caozhehui.png';

class Header extends React.Component {
  render() {
    const navData = { menu1: 'INTRO', menu2: 'PROJET 1 ', menu3: 'PROJET 2', menu4: 'EXERCICE' };
      const navChildren = Object.keys(navData).map((key) => {
        return (<Item key={key}>
          <a href={"#"+navData[key]} style={{color: "#fff",textDecoration: "none",}}>{navData[key]}</a>
        </Item>);
    });
    return (<TweenOne
      component="header"
      animation={{ opacity: 1, type: 'from' }}
      {...this.props}
      style={{ backgroundColor: 'rgba(234, 9, 9, 1)', boxShadow: '10 0px 0px rgba(255, 255, 255, 1)' }}
    >
      <TweenOne
        className={`${this.props.className}-user`}
        animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
        style={{ margin: '0px 4% 0px 0px' }}
      >
        <a href="./series_show/information.html" className="user">
          <span className="img">
            <img
              src={headURL}
              alt=""
              width="30"
              height="30"
            />
          </span>
          <span>Zhehui CAO</span>
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
