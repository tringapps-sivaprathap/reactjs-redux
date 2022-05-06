import { connect } from 'react-redux'

const Footer = (props) => {
  return (
    <div className='footer'>
      <p>{props.userName}, from India</p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName
    }
}

export default connect(
  mapStateToProps
)(Footer)