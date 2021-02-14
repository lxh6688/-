import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label type="checkbox">
          <input type="checkbox"/>
          <span>xxxxx</span>
        </label>
        <button className="btn btn-danger" style={{display:'none'}}>删除</button>
      </li>
    )
  }
}
