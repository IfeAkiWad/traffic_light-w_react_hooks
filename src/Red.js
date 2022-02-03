import React from "react"
import Light from "./Light"

const Red = ({ isOn }) => {
    return (
        <div>
            <Light 
                style={{
                    backgroundColor: isOn ? '#FF0000' : '#b300000',
                    boxShadow: isOn && '0 0 6em ##ff3333'
                }}
            />

        </div>
    )
}
export default Red