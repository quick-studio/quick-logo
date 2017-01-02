import React from 'react';
import Divider from '../../src/Divider/Divider';
import StylePanel from './StylePanel/StylePanelContainer';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div style={ styles.container }>
                <StylePanel />

        </div>
        );
    }
}

const styles = {
}