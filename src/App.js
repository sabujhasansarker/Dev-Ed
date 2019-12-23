import React, { Component } from 'react';
import './App.css';
import MovieProvider from './MovieContext';
class App extends Component {
    render(){ 
        return ( 
            
            <div className="App">
                <MovieProvider>

                </MovieProvider>
            </div>
         );
    }
}
 
export default App;