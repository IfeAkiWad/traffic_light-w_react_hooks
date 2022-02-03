import React from "react"
import Light from "./Light"


const Green = ({ isOn }) => {
    return (
        <div>
            <Light 
                style={{
                    backgroundColor: isOn ? '#00FF00' : '#32CD32',
                    boxShadow: isOn && '0 0 6em #33ff33'
                }}
            />
        </div>
    )
}
export default Green