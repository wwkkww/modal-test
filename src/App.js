import React, { Component } from 'react';
import Modal from './component/Modal';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onClose = e => {
    e.preventDefault();
    console.log("on close")
  }
  render() {
    return (
      <div className="App">
        <h1> React modal </h1>
        <button 
          onClick={this.toggleModal}>
          Open modal
        </button>

        <Modal
          onClose={this.toggleModal}
          show={this.state.isOpen}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure fugiat suscipit, modi explicabo beatae, assumenda asperiores dolorum deserunt quam accusamus aperiam delectus. Soluta atque accusamus odit maiores modi, labore libero.</p>
       </Modal>
      </div>
    );
  }
}

export default App;
