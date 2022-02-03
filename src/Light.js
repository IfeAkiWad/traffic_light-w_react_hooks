import React from "react"

const Light = ({ style }) => {
    return (
        <div
            style={{
            appearance: "none",
            position: "relative",
            left: "50%",
            width: 80,
            height: 80,
            marginTop: 20,
            marginLeft: -40,
            backgroundColor: "grey",
            verticalAlign: "middle",
            borderRadius: "100%",
            display: "block",
            ...style
            }}
        >

        </div>
    )
}
export default Light