import React from 'react'

const UserNavBar = ({ users }) => {
  return (
    <div className='dsc-left-nav-usr'>
      <img className='dsc-left-nav-usr__avatar' src={users.avatar} alt='profile' />
      <h4 className='dsc-left-nav-usr__name'>{users.name}</h4>
      <h6 className='dsc-left-nav-usr__position'>{users.position}</h6>
    </div>
  )
}

export default UserNavBar
