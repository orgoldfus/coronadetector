import React from "react"
import TakeSelfie from "../TakeSelfie"
import AnalyzeSelfie from "../AnalyzeSelfie"
import { useCameraCapabilities } from "../../hooks/useCameraCapabilities"
import { IonContent, IonPage } from "@ionic/react"
import "./Main.css"

const Main: React.FC = () => {
  const { photo, takePhoto, clearPhoto } = useCameraCapabilities()

  return (
    <IonPage>
      <IonContent>
        {photo ? (
          <AnalyzeSelfie photo={photo} clearPhoto={clearPhoto} />
        ) : (
          <TakeSelfie takePhoto={takePhoto} />
        )}
      </IonContent>
    </IonPage>
  )
}

export default Main
