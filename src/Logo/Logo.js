import React from 'react'

const Logo = ({white, em = 2, thin, bold}) => (
	<div style={styles.container}>
		<h1 style={{...styles.h1, fontSize: em + 'em' }}>
			<span className="quick-font icon-quick" style={styles.symbol}></span>
			<span style={{...styles.title, color: white ? 'white' : '#333', fontWeight: thin ? 200 : (bold ? 700 : 'normal') }}>Quick Studio</span>
		</h1>
	</div>
)

const styles = {
	container: {
		fontSize: '1.0em',
	},
	h1: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 0,
		margin: 0,
	},
	title: {
		flex: 1,
		fontFamily: 'Titillium Web, sans-serif',
	},
	symbol: {
		color: 'orangered',
		fontSize: '2.3em',
	},
}

export default Logo
