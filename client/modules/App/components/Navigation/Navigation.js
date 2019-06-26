import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './Navigation.css';

export function Navigation (props, context) {
    return (
		<div className={styles['navigation']}>
			<ul>
				<li><Link to="/home">Home</Link></li>
				<li><Link to="/posts">Posts</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</div>
    );
}


Navigation.propTypes = {
};

export default Navigation;
