import React from 'react';
import './loader.css';

const styles = {
    loader:{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto auto',
    },
    upper:{
        padding: '2rem'
    }

}
export  default () => (
    <div style={styles.upper}><div style={styles.loader} className="lds-heart">
        <div></div>
    </div></div>
    )