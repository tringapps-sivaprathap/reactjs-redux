import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div className='header'>
      <p>{props.userName}</p>
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
)(Header)