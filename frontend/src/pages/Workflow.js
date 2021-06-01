import { Component } from 'inferno';
import { inject, observer } from 'inferno-mobx'
import  gsap  from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

class Workflow extends Component {

  componentDidMount(){
      Draggable.create(".lolz")
  }

  render(props) {
    return (
      <div className="square-grid full-size">
        <header>
            <h1>This is my workflow</h1>
        </header>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
        <p className="lolz"> LOL</p>
      </div>
    );
  }
}

export default inject('rootStore')(observer(Workflow));