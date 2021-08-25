/*
 * @Author: wzheng(hb_wangzheng@163.com)
 * @Github: https://github.com/wayley
 * @Company: FOXCONN(-ACKN)
 * @Date: 2021-08-24 17:09:53
 * @LastEditors: wzheng(hb_wangzheng@163.com)
 * @LastEditTime: 2021-08-25 09:48:07
 * @Description:
 */
import logo from "./logo.svg";
import "./App.css";
const envs = process.env;
console.log(envs, "----");
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
