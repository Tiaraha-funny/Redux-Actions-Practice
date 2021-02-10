import { connect } from "react-redux";
import { setImageScale } from "../actions";
import ScaleImage from "../components/ScaleImage";

const mapDispatchToProps = {
    set: setImageScale,
} 

export default connect(null, mapDispatchToProps)(ScaleImage);