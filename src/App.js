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
    images: imageArr,
    animId: -1
  };

  shuffle(arr) {
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

  timeoutCB() {
    clearTimeout(this.timeHandle);
    this.setState({
      topScore: this.state.currScore > this.state.topScore ? this.state.currScore : this.state.topScore,
      currScore: 0,
      clickedList: [],
      images: this.shuffle(this.state.images),
      animId: -1
    });
  }

  clickImage = id => {
    if (this.state.clickedList.indexOf(id) < 0) {
      // not found - haven't clicked this image yet.
      var newList = this.state.clickedList;
      newList.push(id);
      this.setState({
        currScore: this.state.currScore + 1,
        clickedList: newList,
        images: this.shuffle(this.state.images)
      });
    } else {
      // update topScore if current score is higher. and start new game.
      this.timeHandle = setTimeout(() => this.timeoutCB(), 550);

      this.setState({
        animId: id
      });
 
    }
  }


  render() {
    return [
      <Navbar cScore={this.state.currScore} tScore={this.state.topScore} animId={this.state.animId} />,
      <CardColumn images={this.state.images} hClick={this.clickImage} animId={this.state.animId} />,
      <Footer />
    ];
  }
}


export default App;
