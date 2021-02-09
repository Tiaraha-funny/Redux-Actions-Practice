import { connect } from 'react-redux';
import Counter from '../components/Counter';

//map a prop called text to the state specialText
function mapStateToProps(globalState){
  return {
    count: globalState.currentCount
  }
}

export default connect(mapStateToProps, null)(Counter);