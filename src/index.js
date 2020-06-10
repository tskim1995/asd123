import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/**시계**/
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick() {
        this.setState({
            date: new Date()
        });
    }

    tenthDigit(num) {
      return Math.floor(num/10);
    }

    firstDigit(num) {
      return num%10;
    }

    render() {
      let Now = this.state.date;
      let hour = Now.getHours()*1;
      let min = Now.getMinutes()*1;
      let sec = Now.getSeconds()*1;

      return (
        <div className='time'>
          <h2>{this.tenthDigit(hour)}</h2>
          <h2>{this.firstDigit(hour)}</h2>
          <h2>:</h2>
          <h2>{this.tenthDigit(min)}</h2>
          <h2>{this.firstDigit(min)}</h2>
          <h2>:</h2>
          <h2>{this.tenthDigit(sec)}</h2>
          <h2>{this.firstDigit(sec)}</h2>
        </div>
      );
    }
}

// 로그인 칸
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      value: ''
    };
    
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleLogin(event) {
    this.setState(state => ({
      isLogin: !state.isLogin
    }));
    event.preventDefault();
  }

  render() {
    if(!this.state.isLogin){
      return (
        <fieldset className = 'loginControl'>
          <legend>LOGIN</legend>
          <form onSubmit = {this.handleLogin} className='Login'>
            <label>
              name:
              <input type = 'text' value = {this.state.value} onChange={this.handleChange}/>
            </label>
            <input type = 'submit' value = 'LOGIN' />
          </form>
        </fieldset>
      )
    } else {
      return (
        <div>
          <h1>Welcome <br/> {this.state.value}</h1>
          <div className='Above'>
            <Clock />
            <form onSubmit = {this.handleLogin} className = 'logout'>
              <input type = 'submit' value = 'LOGOUT' />
            </form>
          </div>
        </div>
      )
    }
  }
}

ReactDOM.render(
        <LoginControl />,
        document.getElementById('root')
);