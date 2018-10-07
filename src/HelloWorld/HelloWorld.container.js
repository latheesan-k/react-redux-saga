import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import helloWorldComponent from "./HelloWorld.component";
import { helloWorldRequest } from "./HelloWorld.actionCreators";

const mapStateToProps = state => ({ responseText: state.helloWorldReducer.responseText });
const mapDispatchToProps = dispatch => bindActionCreators({ helloWorldRequest }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(helloWorldComponent);
