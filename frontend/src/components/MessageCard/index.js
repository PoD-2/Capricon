import React from 'react'

function MessageCard(props) {
    return (
        <div style={{height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
       <p className="mt-5 text-muted text-monospace" style={{ fontSize: 32 }}>{props.message}</p>
        </div>
    )
}

export default MessageCard
