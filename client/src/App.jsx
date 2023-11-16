import './App.css';
import React from 'react';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  const handleClick = () => {
    history.push('./index.html');
  };
  return (    
    <div className="App">
      <span></span>
      <section class="container">
        <div class="login-container">
            <div class="circle circle-one"></div>
            <div class="form-container">
                <img src="http://img08.deviantart.net/860a/i/2012/308/0/b/__hd___pokemon_logo___hd___by_peetzaahhh2010-d5k08gz.png" alt="illustration" class="illustration" />
                <h1>LOGIN</h1>
                <form>
                    <input type="text" placeholder="USUARIO" />
                    <input type="password" placeholder="CONTRASEÑA"/>
                    <button onClick={handleClick}>INGRESAR</button>
                </form>
                <div class="register-forget opacity">
                    <a href="">REGISTER</a>
                    <a href="">FORGOT PASSWORD</a>
                </div>
            </div>
            <div class="circle circle-two"></div>
        </div>
        <div class="theme-btn-container"></div>
    </section>
    </div>
  );
}

export default App;
