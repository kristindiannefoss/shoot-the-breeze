import React, { Component } from 'react';
import Application from './Application';
const _ =  require('lodash');

class UserList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const usersArray = [];
    _.map(this.props.messages, (message) => usersArray.push(message.user))
    const uniqueUsers = (_.uniqWith(usersArray, _.isEqual))
    console.log(uniqueUsers)

    return(
      <div className='userList'>
        { uniqueUsers.map(u =>  <p> <a> {u.displayName} ({u.email}) </a> </p> ) }
      </div>
    )
  }
}

export default UserList;

//  getUniq(){
  //   var messageArray = this.props.messages.map(m => {m.user.displayName} ({ m.user.email }) );
  //   return _.uniq(messageArray);
  // }
//   constructor(props) {
//     super(props)
//   }
//
//   getUniq(){
//     var messageArray = this.props.messages.map(m => {m.user.displayName} ({ m.user.email }) );
//     return _.uniq(messageArray);
//   }
//
//   render() {
//     return(
//       <ul>
//         { this.getUniq().map(m => <li> { m } </li>) }
//       </ul>
//     )
//   }
// }
