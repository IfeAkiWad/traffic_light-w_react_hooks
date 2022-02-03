import React, { Component } from 'react'
import { withStateMachine } from 'react-automata'
import Green from './Green'
import Red from './Red'
import Yellow from './Yellow'

class TrafficLightAutomata extends Component {
     transition = () => {
        this.props.transition('NEXT')
    }

     waitLongInterval = () => {
        setTimeout(this.transition, 2000);
    }
    
     waitShortInterval = () => {
        setTimeout(this.transition, 800);
    }

    render() {
        return(
            <div>
                <Red isOn={this.props.machineState.value === "RED"}  />
                <Green isOn={this.props.machineState.value === "GREEN"}  />
                <Yellow isOn={this.props.machineState.value === "YELLOW"}  />
            </div>
        )
    }

    
}
const stateChart = {
    initial: "GREEN",
    states: {
      GREEN: {
        on: {
          NEXT: "YELLOW"
        },
        onEntry: "waitLongInterval"
      },
      YELLOW: {
        on: {
          NEXT: "RED"
        },
        onEntry: "waitShortInterval"
      },
      RED: {
        on: {
          NEXT: "GREEN"
        },
        onEntry: "waitLongInterval"
      }
    }
}
export default withStateMachine(stateChart)(TrafficLightAutomata);