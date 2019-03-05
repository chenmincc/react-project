import React from 'react';
import '@/components/me/index.less'
const wode = class wode extends React.Component {
  render() {
    return (
      <div>
        <div className="touch-header header" >
          <a href="javascript:history.go(-1);" id="touch-header-back" className="touch-header-back not-timeout">&lt;
          </a>
          <div className="touch-header-title">
            御泥坊品牌团
          </div>
          <a className="touch-header-home" href="//h5.jumei.com/">^
          </a>
        </div>
      </div>
    )
  }
};
export default wode