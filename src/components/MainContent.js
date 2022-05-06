import { connect } from 'react-redux'
import { setUser } from '../redux'
import { useState } from 'react'

const MainContent = (props) => {
  const [name, setName] = useState('');
  
  return (
    <div className='main-content'>
      <form className='main-content-form' onSubmit={(event) => {
          event.preventDefault();
          props.setUser(name);
          setName('');
      }}>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        userName: state.userName
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return  {
        setUser: (name) => dispatch(setUser(name))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent)