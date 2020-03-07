import React, { useState, useEffect } from "react"
import "./AnalyzeSelfie.css"
import { close } from "ionicons/icons"
import { useHistory } from "react-router-dom"
import {
  CoronaDetected,
  CoronaNotDetected
} from "../../components/CoronaStatus"
import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonGrid,
  IonPage,
  IonRow,
  IonText
} from "@ionic/react"

interface AnalyzeSelfieProps {
  isCoronaDetected: boolean
  clearPhoto: any
  photo: string
}

const AnalyzeSelfie: React.FC<AnalyzeSelfieProps> = ({
  isCoronaDetected,
  clearPhoto,
  photo
}) => {
  const [analyzing, setAnalyzing] = useState(true)
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => setAnalyzing(false), 3000)
  }, [])

  const onClearPhoto = (event: any) => {
    event.preventDefault()

    clearPhoto()
    history.replace("/")
  }

  return (
    <IonPage>
      <IonContent className="analyze">
        <IonGrid className="result-container">
          <IonRow className="status-container">
            {analyzing ? (
              <IonText>
                <h1 className="details">Analyzing...</h1>
              </IonText>
            ) : isCoronaDetected ? (
              <CoronaDetected />
            ) : (
              <CoronaNotDetected />
            )}
          </IonRow>
          <IonRow className="image-container">
            <IonCol>
              <IonImg className="photo" src={photo} />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab
          className="actionButton"
          vertical="bottom"
          horizontal="center"
          slot="fixed"
        >
          <IonFabButton onClick={onClearPhoto}>
            <IonIcon icon={close}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}

export default AnalyzeSelfie
