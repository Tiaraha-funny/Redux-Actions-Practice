import { connect } from "react-redux";
import { setCurrentUserSort } from "../actions";
import SortUsers from "../components/SortUsers";

const mapDispatchToProps = {
  set: setCurrentUserSort,
};

const mapStateToProps = (state) => {
  return {
    sortUser: state.setCurrentUserSort
  }
};

export default connect( mapStateToProps, mapDispatchToProps )(SortUsers);
