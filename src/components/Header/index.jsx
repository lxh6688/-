import React, { Component } from 'react'
import {nanoid} from "nanoid";
import './index.css'

console.log(nanoid())
console.log(nanoid())
console.log(nanoid())
export default class Header extends Component {

  handleKeyUp = (event) => {
    const {keyCode,target} = event
    if(keyCode !== 13) return
    this.props.addTodo(target.value)
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
