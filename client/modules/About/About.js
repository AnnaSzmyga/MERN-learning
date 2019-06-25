import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class About extends Component {
  render() {
    return (
		<div>
			<h2>About me</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, turpis ut efficitur porta, mauris tortor mollis risus, in accumsan nibh quam a ante. Mauris in mattis arcu. Integer aliquet eu tortor nec accumsan. Duis sed pretium risus. Fusce ac enim aliquam, elementum dolor sollicitudin, lobortis ex. Donec ullamcorper ex a enim tempor, quis auctor quam ullamcorper. Integer eget fringilla purus. Pellentesque et est velit. Aliquam dictum sollicitudin nisi eu pulvinar. Nulla scelerisque tellus tincidunt, pulvinar tellus sit amet, laoreet velit. Sed a euismod orci. In id nibh in sem convallis convallis.</p>
		</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
