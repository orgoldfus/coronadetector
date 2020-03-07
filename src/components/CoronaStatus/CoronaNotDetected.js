import React from "react"
import { IonText } from "@ionic/react"
import "./CoronaNotDetected.css"

export default function CoronaNotDetected() {
  return (
    <div className="no-corona-container">
      <IonText>
        <h1 className="no-corona-message">No<br/>Coronavirus<br/>Detected</h1>
      </IonText>
    </div>
  )
}
