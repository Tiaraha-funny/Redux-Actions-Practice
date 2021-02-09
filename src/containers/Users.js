import {connect} from 'react-redux';
import Users from '../components/Users';

function mapStateToProps(globalState){
    return {
        users: globalState.users,
        sortOn: globalState.currentUserSort, 
        firstNameFilter: globalState.searchText
    }
}

export default connect(mapStateToProps, null)(Users)