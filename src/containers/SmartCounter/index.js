import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Counter from '../../components/Counter'
import {counterIncrementAsync} from '../../actions/counter'

function mapStateToProps({count}) {
  return {count}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClick: e => counterIncrementAsync(1)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
