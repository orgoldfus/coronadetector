import React from "react"
import "./TakeSelfie.css"
import { IonButton, IonGrid, IonRow, IonText, IonIcon } from "@ionic/react"

interface TakeSelfieProps {
  takePhoto: any
}

const TakeSelfie: React.FC<TakeSelfieProps> = ({ takePhoto }) => {
  return (
    <React.Fragment>
      <IonGrid>
        <IonRow>
          <IonText className="instructions" color="black">
            <h1 style={{ fontSize: "4rem" }}>Coronavirus</h1>
            <h1 style={{ fontSize: "3rem" }}>Detector</h1>
          </IonText>
        </IonRow>
      </IonGrid>

      <IonButton
        style={{ width: "20rem" }}
        color="warning"
        size="large"
        shape="round"
        expand="block"
        onClick={takePhoto}
      >
        Scan here
      </IonButton>

      <IonButton>
        <IonIcon>?</IonIcon>
      </IonButton>
    </React.Fragment>
  )
}

export default TakeSelfie
