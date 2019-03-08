import React, { Component } from 'react';
import '@/components/total/shouye/pop/index.less'
import axios from "axios"
import Footer from '@/components/total/index.js';
const pop = class Pop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popList: []
    }

  }

  componentDidMount () {
    axios.get('/api1/pop/ajaxGetList?page=2&item_per_page=20').then(response => {
      let res = response.data.item_list;
<<<<<<< HEAD
      console.log(res)
=======
      // console.log(res)
>>>>>>> min
      this.setState({
        popList: res
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    console.log(this.state.popList)
    return (
      <>
        {
          this.state.popList.map((item, index) => {
            return (
              <a href="/" key={index}>
                <div className="item-list clearfix">
                  <div className="pop_image">
                    <img className="img-lazy main_image" src={item.image_url_set.main[320]} alt="" />
                      <div className="discount">
                        <p>{item.discount_string}</p>
                      </div>
                  </div>
                  <div className="pop_information">
                    <div className="right_logo">
                      <img src={item.image_url_set.brand[320]} alt="" />
                    </div>
                    <div className="left_info">
                      <p className="pop_title">{item.title}</p>
                      <p className="timer" data-diff="291273">剩余<span>03天</span><span>08时</span></p>
                    </div>
                  </div>
                </div>
              </a>
            )
          })
        }
        <Footer />
      </>
          )
        }
      }

      export default pop;
