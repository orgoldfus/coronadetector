import React, { useState, useEffect } from "react"
import "./AnalyzeSelfie.css"
import { close } from "ionicons/icons"
import { useHistory } from "react-router-dom"
import {
  CoronaDetected,
  CoronaNotDetected
} from "../../components/CoronaStatus"
import { randomBoolean } from "../../utils/misc"
import { fetchDataFromStorage } from "../../utils/storage"
import { DEFAULT_POSITIVE_DETECTION_RATE } from "../../constants"
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonPage,
  IonRow,
  IonText
} from "@ionic/react"

interface AnalyzeSelfieProps {
  clearPhoto: any
  photo: string | undefined
}

const AnalyzeSelfie: React.FC<AnalyzeSelfieProps> = ({ clearPhoto, photo }) => {
  const [analyzing, setAnalyzing] = useState(true)
  const [isCoronaDetected, setIsCoronaDetected] = useState(true)
  const history = useHistory()

  useEffect(() => {
    const setDetectionResult = async () => {
      const pdPercentage = await fetchDataFromStorage(
        "positiveDetectionPercentage"
      )
      const detectionRate = pdPercentage
        ? +pdPercentage
        : DEFAULT_POSITIVE_DETECTION_RATE
      const detectionResult = randomBoolean(detectionRate)
      setIsCoronaDetected(detectionResult)
    }

    setTimeout(() => setAnalyzing(false), 3000)
    setDetectionResult()
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
            <img className="photo" src={photo} alt="analysis target" />
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
