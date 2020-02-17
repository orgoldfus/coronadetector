import React from "react"
import "./AnalyzeSelfie.css"
import { close } from "ionicons/icons"
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonImg,
  IonText
} from "@ionic/react"

interface AnalyzeSelfieProps {
  photo: string,
  clearPhoto: any
}

const AnalyzeSelfie: React.FC<AnalyzeSelfieProps> = ({ clearPhoto, photo }) => {
  return (
    <React.Fragment>
      <IonGrid>
        <IonRow>
          <IonImg src={photo} />
        </IonRow>
        <IonRow>
          <IonText className="details" color="primary">
            <h1>Analyzing...</h1>
          </IonText>
        </IonRow>
      </IonGrid>
      <IonFab
        className="actionButton"
        vertical="bottom"
        horizontal="center"
        slot="fixed"
      >
        <IonFabButton onClick={clearPhoto}>
          <IonIcon icon={close}></IonIcon>
        </IonFabButton>
      </IonFab>
    </React.Fragment>
  )
}

export default AnalyzeSelfie
