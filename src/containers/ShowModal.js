import { connect } from "react-redux";
import { toggleModal } from "../actions";
import ShowModal from "../components/ShowModal";

const mapDispatchToProps = {
    toggleModal: toggleModal,
}

export default connect(null, mapDispatchToProps) (ShowModal);