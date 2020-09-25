import React from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends React.Component { // 유사 자바스크립트. 자바스크립트인게 아님. JSX문법!
  constructor(props){
    // state값 초기화. 그 초기화 값을 가지고 컴포넌트 props 값을 세팅하려고 하는 것
    super(props);

    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'}
    }
  }

  render() {
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
        </Subject>
        {/*<Subject title="WEB" sub="world wide web!"></Subject>*/}{/* props의 값들이 하드코딩 되어있음. 이 값을 state로 만들고 state 값을 subject라는 컴포넌트의 props로 전달하는 과정을 통해서 코드를 개선해보자! */}
        {/*<Subject title="React" sub="For UI"></Subject>*/}
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
