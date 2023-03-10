import React from 'react'

/** functional Component
 * 
 *  함수형 컴포넌트는 렌더링된 값들을 고정시킨다
 *  render시에 값들을 유지한다.
 * 
 * */
const ProfilePage = ({user}) => {

  const showMessage = () => {
    alert('Function ' + user);
  }
  
  const handleClick = () => {
    setTimeout(showMessage, 3000);
  }
  
  return (
    <>
      <br/>
      <button onClick={handleClick}>Follow2</button> Function
      <br/>
    </>
  )
}

export default ProfilePage