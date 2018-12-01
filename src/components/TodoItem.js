import React, { Component } from 'react';
import classNames from 'classnames'
import './TodoItem.css'
import checkImg from '../img/check.svg'
import checkDoneImg from '../img/check-done.svg'
class TodoItem extends Component{
	render(){
		const { item, onClick } = this.props; 
		let url = checkImg;
		if(item.isComplete){
			url = checkDoneImg;
		}
		return (
			<div className={classNames('TodoItem', {
				'TodoItem-done': item.isComplete
			})}> 
				<img onClick={ onClick } src= {url} />
				<p> {this.props.item.title} </p>
			</div> 
		);
	}
}

export default TodoItem;