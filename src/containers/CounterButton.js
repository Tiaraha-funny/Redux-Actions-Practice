import { connect } from 'react-redux';
import { increase, decrease } from '../actions/index';
import CounterButton from '../components/CounterButton';

function mapDispatchToProps(dispatch){

    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    }
  }
  export default connect(null, mapDispatchToProps) (CounterButton);