import React, { Component } from "react";
import { connect } from "react-redux";
import heroOperations from "../redux/operations";
import HeroForm from "../components/HeroForm";

class AddHero extends Component {
  state = {};
  render() {
    return <HeroForm onAddHero={this.props.handleAddHero} />;
  }
}

// const mapStateToProps = (state) => ({
//   error: state.auth.error,
// });
const mapDispatchToProps = {
  handleAddHero: heroOperations.addHero,
};

export default connect(null, mapDispatchToProps)(AddHero);
