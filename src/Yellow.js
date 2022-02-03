import React from "react"
import Light from "./Light"


const Yellow = ({ isOn }) => {
    return (
        <div>
            <Light 
                style={{
                    backgroundColor: isOn ? '#FFFF00' : '#b2b300',
                    boxShadow: isOn && '0 0 6em ##ffff33'
                }}
            />
        </div>
    )
}
export default Yellow