import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {authSignOutTry} from '../../actions/auth'
import Auth from '../Auth'
import Sequencer from '../Sequencer'
import Transport from '../Transport'
import People from '../People'

const Layout = ({currentUser, authSignOutTry, freezing}) => (
  <div>
    {currentUser ? (
      <div>
        <Transport />
        <Sequencer />
        <People />
        <button disabled={freezing} onClick={() => authSignOutTry()}>Sign out</button>
      </div>
    ) : (
      <Auth />
    )}
  </div>
)

Layout.propTypes = {
  currentUser: PropTypes.object,
  freezing: PropTypes.bool.isRequired,
  authSignOutTry: PropTypes.func.isRequired
}

function mapStateToProps({auth: {currentUser, freezing}}) {
  return {currentUser, freezing}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({authSignOutTry}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
