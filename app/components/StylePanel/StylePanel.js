import React from 'react';
import Logo from '../../../src/Logo/Logo';

export default class StylePanel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={ styles.container }>
				<Logo white={ true } em={ 4.5 } />
			</div>
		)
	}
}

const stylesSmall = {
	container: {
		backgroundColor: '#4b4b4b',
		flex: 1,
		padding: '10px 0 0',
		margin: 0,
		color: '#fff',
	},
	box: {},
	content: {
		padding: '0 10px',
	},
	divider: {
		backgroundColor: '#777',
		margin: '4px 0 6px',
		padding: 0,
	},
	label: {
		fontSize: '12px',
		width: '45px',
		lineHeight: '24px',
		textAlign: 'right',
		color: '#e3e3e3',
	},
	labelBgColor: {
		fontSize: '12px',
		width: '62px',
		marginRight:'3px',
		lineHeight: '24px',
		textAlign: 'right',
		color: '#e3e3e3',
	},
	position: {
	}

}
const stylesBig = {
	container: {
		backgroundColor: '#4b4b4b',
		flex: 1,
		padding: '10px 0 0',
		margin: 0,
		color: '#fff',
	},
	box: {},
	content: {
		padding: '0 10px',
	},
	divider: {
		backgroundColor: '#777',
		margin: '4px 0 6px',
		padding: 0,
	},
	label: {
		fontSize: '14px',
		width: '60px',
		lineHeight: '29px',
		textAlign: 'right',
		color: '#e3e3e3',
	},
	labelBgColor: {
		fontSize: '14px',
		width: '111px',
		marginRight:'3px',
		lineHeight: '29px',
		textAlign: 'right',
		color: '#e3e3e3',
	},
	position: {
	}

}


const bigScreen = window.innerHeight > 750;
const styles = bigScreen ? stylesBig : stylesSmall;