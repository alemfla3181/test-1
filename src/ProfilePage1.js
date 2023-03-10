import React from 'react'

/** class Component
 * 
 *  Props는 리액트에서 불변 값이지만 
 *  this는 변경 가능하며 조작 가능하다.
 *  시간이 지나면 변경된 user값을 읽는다.
 * 
 * */
class ProfilePage extends React.Component {

  showMessage = () => {
    alert('Class ' + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  }

  // showMessage = (user) => {
  //   alert('Class ' + user);
  // };

  // handleClick = () => {
  //   const {user} = this.props
  //   setTimeout(() => this.showMessage(user), 3000);
  // }

  render() {
    return(
      <>
        <br/>
        <button onClick={this.handleClick}>Follow1</button> Class
        <br/>
      </>
    )
  }
}

export default ProfilePage