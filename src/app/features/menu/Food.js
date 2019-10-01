import React from "react";
// import "./App.css";
import { Menu } from "../../../data/menu.json";


class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: " ",
      value: " ",
      watch: false,
      watchfood: false,
      watchliquids: false,
      data: props.data,
    };
    this.onClickToAdd = this.onClickToAdd.bind(this);

  }

  onClickToAdd(props){
      this.setState({name: this.state.name.concat("Sandwich ham & cheese"), value: this.state.value});
  console.log("onclicktoadd", this.state.name, this.state.value)

  }

  componentDidMount(props) {
   /* console.log(this.props.name)*/
  }



  render() {

    return (

      <div className="col-md-8">
      {this.state.name}
        <div>
          <div>
      <div className="line"></div>
            <h6>Breakfast</h6>
            
            {Menu.Sandwich.map((btn) => (
            <button key = {btn}
                onClick={ this.onClickToAdd.bind(this)  }
                className="main-button">
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}

            <h6>Main</h6>
            <div className="line"></div>
            <div className="burger-button">
            {Menu.Simple_Burger.map(btn => (
              <button
                
                className="main-button">
                <img src={btn.img}></img>
                <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
              ))}
            </div>
            <div className="burger-button">
            {Menu.Double_Burger.map((btn, i ) => (
              <button key = {i}
                onClick={ this.onClickToAdd.bind(this)  }
                className="main-button">
                <img src={btn.img}></img>
                <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
            </div>
          </div>
          <div className="item-btn-row">
            {Menu.Toppings.map(btn => (
              <button className="main-button">
              <img src={btn.img}></img>
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              
              </button>
            ))}
          </div>
          <div className="item-btn-row">
            {Menu.Side_Diches.map(btn => (
              <button className="main-button">
              <img src={btn.img}></img>
              <div><p>{btn.name}</p></div>  
              <div><p>${btn.value}</p></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
// onClick={() => this.props.add(btn.value, btn.name)}
export default Food;