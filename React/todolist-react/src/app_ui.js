import React from 'react';
import { Input, Button, List } from 'antd';

export default (props) => {
  return (
    <div style={{marginTop: 10, marginLeft: 10}}>
      <div>
        <Input value={props.inputValue} onChange={props.onInputChange} placeholder="请输入待办事项" style={{width: 300, marginRight: 10}} />
        <Button type="primary" onClick={() => {props.onAddTodoItem(props.inputValue)}}>提交</Button>
      </div>
      <List
        style={{width: 300, marginTop: 10}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => props.onItemClick(index)}>{item}</List.Item>)}
      />
    </div>
  )
}