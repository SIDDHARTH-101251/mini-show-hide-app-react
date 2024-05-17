// import {Component} from 'react'
// import './index.css'

// class ShowHide extends Component {
//   state = {firstName: false, lastName: false}

//   handleEventFirstButton = () => {
//     this.setState(prevState => ({
//       firstName: !prevState.firstName,
//     }))
//   }

//   handleEventSecondButton = () => {
//     this.setState(prevState => ({
//       lastName: !prevState.lastName,
//     }))
//   }

//   renderDiv1 = () => {
//     const {firstName} = this.state
//     if (firstName === true) {
//       return <p className="para">Siddharth</p>
//     }
//     return <div />
//   }

//   renderDiv2 = () => {
//     const {lastName} = this.state
//     if (lastName === true) {
//       return <p className="para">Singh</p>
//     }
//     return <div />
//   }

//   render() {
//     return (
//       <div className="bg-container">
//         <h1 className="main-heading">Show/Hide</h1>
//         <div className="button-name-container">
//           <div className="button-name-inner-container">
//             <button
//               type="button"
//               className="button"
//               onClick={this.handleEventFirstButton}
//             >
//               Show/Hide Firstname
//             </button>
//             <div className="name">{this.renderDiv1()}</div>
//           </div>
//           <div className="button-name-inner-container">
//             <button
//               type="button"
//               className="button"
//               onClick={this.handleEventSecondButton}
//             >
//               Show/Hide Lastname
//             </button>
//             <div className="name">{this.renderDiv2()}</div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default ShowHide

// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({
      firstCard: !firstCard,
    }))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({
      lastCard: !lastCard,
    }))
  }

  render() {
    const {firstCard, lastCard} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              onClick={this.firstName}
              className="btn-style"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="name-card"> Joe</p> : ''}
          </div>
          <div className="card-container">
            <button onClick={this.lastName} className="btn-style" type="button">
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
