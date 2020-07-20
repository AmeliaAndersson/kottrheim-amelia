import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App.js';
import { ThemeProvider } from '@material-ui/core';
import theme from './themes/light-theme';
  
    class Main extends React.Component {
        render() {
            return (
                <ThemeProvider theme={theme} >
                    <MainApp/>
                </ThemeProvider>
            );
        }
    }
  
  // ========================================
  
    ReactDOM.render(
        <Main />,
        document.getElementById('root')
    );
  