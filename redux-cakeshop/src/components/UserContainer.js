import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, []) //eslint-disable-line

  return (
    <>
      {userData?.loading ? (
        <h2>Loading...</h2>
      ) : userData?.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <>
          <h2>User List</h2>
          <>
            {userData?.users?.map((user) => (
              <p>{user.name}</p>
            ))}
          </>
        </>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
