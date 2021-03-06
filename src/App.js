import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  return (
    <div className='app'>

     {/* Header  */}
      <Header />
     {/* App Body */}
       <div className="app__body">
         <Sidebar />
         <Feed />
       </div>

     {/* Feed */}
     {/* Widget */}
    </div>
  );
}

export default App;
