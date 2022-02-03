import React from 'react';
import { useState, useEffect } from "react"
import Green from './Green';
import Red from './Red';
import Yellow from './Yellow';

export const TrafficLight = () => {
    const [green, setGreen] = useState(true)
    const [red, setRed] = useState(false)
    const [yellow, setYellow] = useState(false)

    const transition = () => {
        if (green) {
            setGreen(false)
            setYellow(true)
            setRed(false);
            waitShortInterval()
            return 
        }
       
        if (yellow) {
            setGreen(false)
            setYellow(false)
            setRed(true);
            waitLongInterval()
            return
        }

        if (red) {
            setGreen(true)
            setYellow(false)
            setRed(false);
            waitLongInterval()
            return
        }  
    }

    const waitShortInterval = () =>
    {
        setTimeout(transition, 800)
    }

    const waitLongInterval = () =>
    {
        setTimeout(transition, 1000)
    }

     // eslint-disable-next-line
    useEffect({
        waitLongInterval
    }, [])

  return (
      <div>
          <Red isOn={red} />
          <Green isOn={green} />
          <Yellow isOn={yellow} />
      </div>
  )
};
export default TrafficLight