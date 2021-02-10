import { connect } from "react-redux";
import { setCurrentTemp } from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";

const mapDispatchToProps = {
        set: setCurrentTemp,
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);