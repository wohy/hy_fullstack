import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input 
          value={props.inputValue} 
          placeholder="todo info" 
          style={{width: '300px',marginRight: '10px'}}
          onChange={props.handleInputChange}
        ></Input>
        <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
      </div>

      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>
          // 好像点一下删除，只会从list第一个删，而不是点那个删哪个, handleItemDelete 的 index 传进去
        )}
      />
    </div>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <div>
//           <Input 
//             value={this.props.inputValue} 
//             placeholder="todo info" 
//             style={{width: '300px',marginRight: '10px'}}
//             onChange={this.props.handleInputChange}
//           ></Input>
//           <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//         </div>

//         <List
//           style={{marginTop: '10px', width: '300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>
//           )}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUI