import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import CardColumn from "./components/CardColumn.js";
import imageArr from "./images.json";


class App extends React.Component {
  state = {
    topScore: 0,
    currScore: 0,
    clickedList: [],
    images: imageArr
  };

  shuffle( arr ) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }
  componentDidMount() {
    this.setState({ images: this.shuffle(this.state.images) });
  }

  clickImage = id => {
    console.log("click " + id);
    if (this.state.clickedList.indexOf(id)<0 ) {
      // not found - haven't clicked this image yet.
      var newList = this.state.clickedList;
      newList.push(id);
      console.log(newList);
      this.setState({ 
        currScore: this.state.currScore + 1,
        clickedList: newList,
        images: this.shuffle(this.state.images)
       });
    } else {
      // update topScore if current score is higher. and start new game.
      this.setState({ 
        topScore : this.state.currScore>this.state.topScore?this.state.currScore:this.state.topScore,
        currScore: 0,
        clickedList: [],
        images: this.shuffle(this.state.images)
       });
    }
  }


  render() {
    return [
      <Navbar cScore={this.state.currScore} tScore={this.state.topScore} />,
      <CardColumn images={this.state.images} hClick={this.clickImage} />,
      <Footer />
    ];
  }
}


export default App;
