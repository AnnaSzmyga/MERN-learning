import React from 'react';
import PropTypes from 'prop-types';

// Import Style
import styles from './Navigation.css';

export function Navigation (props, context) {
    return (
		<div className={styles['navigation']}>
			<ul>
				<li><a href="home">Home</a></li>
				<li><a href="posts">Posts</a></li>
				<li><a href="about">About</a></li>
			</ul>
		</div>
    );
}


Navigation.propTypes = {
};

export default Navigation;
