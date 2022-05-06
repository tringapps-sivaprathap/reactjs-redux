import React from 'react'
import { connect } from 'react-redux'

const SideMenu = (props) => {
  return (
    <div className='side-menu'>
      <span>{props.item1}</span>
      <span>{props.item2}</span>
      <span>{props.item3}</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      userName: state.userName,
      item1: state.item1,
      item2: state.item2,
      item3: state.item3
  }
}

export default connect(
  mapStateToProps
)(SideMenu)


