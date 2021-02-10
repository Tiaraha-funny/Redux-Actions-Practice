import { connect } from "react-redux";
import { toggleModal } from "../actions";
import Modal from "../components/Modal";

function mapStateToProps(globalState) {
  return {
    displayModal: globalState.displayModal,
  };
}

const mapDispatchToProps = {
  toggleModal: toggleModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
