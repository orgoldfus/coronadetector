import React from "react"
import "./TakeSelfie.css"
import { camera } from "ionicons/icons"
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonText
} from "@ionic/react"

interface TakeSelfieProps {
  takePhoto: any
}

const TakeSelfie: React.FC<TakeSelfieProps> = ({ takePhoto }) => {
  return (
    <React.Fragment>
      <IonGrid>
        <IonRow>
          <IonText className="instructions" color="primary">
            <h1>Take a selfie to check if you caught the Coronavirus</h1>
          </IonText>
        </IonRow>
      </IonGrid>
      <IonFab
        className="actionButton"
        vertical="bottom"
        horizontal="center"
        slot="fixed"
      >
        <IonFabButton onClick={takePhoto}>
          <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
      </IonFab>
    </React.Fragment>
  )
}

export default TakeSelfie
