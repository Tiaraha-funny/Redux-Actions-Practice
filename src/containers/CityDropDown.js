import { connect } from "react-redux";
import { setCurrentCity } from "../actions";
import CityDropDown from "../components/CityDropDown";

export default connect((state) => ({ currentCity: state.currentCity }), {
  set: setCurrentCity,
})(CityDropDown);

// const mapDispatchToProps = {
// set: (city) => setCurrentCity(city),
// }
//
// export default connect(null, mapDispatchToProps) (CurrentCity);
