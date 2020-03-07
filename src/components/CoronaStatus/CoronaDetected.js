import React from "react"
import { IonText } from "@ionic/react"
import "./CoronaDetected.css"

export default function CoronaDetected() {
  return (
    <div className="corona-container">
      <IonText>
        <h1 className="corona-message">Coronavirus Detected!</h1>
      </IonText>
    </div>
  )
}
