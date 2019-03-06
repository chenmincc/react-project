import React, { Component } from 'react';
import List from '@/components/total/shouye/home/center/list/list.js';
import List1 from '@/components/total/shouye/home/center/list/list1.js';
import { Route, Switch, NavLink} from 'react-router-dom';
const center = class Center extends Component {
  render() {
    return (
      <>
      <section>
        <div className="tabTitle">
          <NavLink activeClassName="tabClick" className="titleItem" to="/home/center/today">
            今日10点上新
		      </NavLink>
          <NavLink activeClassName="tabClick" className="titleItem" to="/home/center/tomorrow">
            明日10点预告
		      </NavLink>
        </div> 
      </section>
      <Switch>
          <Route path="/home/center/today" component={List}></Route>
          <Route path="/home/center/tomorrow" component={List1}></Route>
          <Route path="/" component={List} exact></Route>                    
        </Switch>  
    </>
    )
  }
}

export default center;
