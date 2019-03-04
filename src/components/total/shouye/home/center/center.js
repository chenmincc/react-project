import React, { Component } from 'react';
import List from '@/components/total/shouye/home/center/list/list.js'

const center = class Center extends Component {
  render() {
    return (
      <section>
        <div className="tabTitle">
          <span className="titleItem tabClick">
            今日10点上新
		      </span>
          <span className="titleItem">
            明日10点预告
		      </span>
        </div>
        <List></List>
      </section>
    )
  }
}

export default center;
