import React, { useState } from "react"
import { IonContent, IonPage } from "@ionic/react"
import { useHistory } from "react-router-dom"
import { randomBoolean } from "../../utils/misc"
import "./Main.css"
import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonText
} from "@ionic/react"
import { helpCircleSharp, settingsSharp } from "ionicons/icons"
import HelpModal from "../../components/HelpModal"

interface MainProps {
  takePhoto: any
  setDetectionResult: any
  positiveResultPercentage: number
}

const Main: React.FC<MainProps> = ({
  takePhoto,
  setDetectionResult,
  positiveResultPercentage
}) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const history = useHistory()

  const onTakePhoto = (event: any) => {
    event.preventDefault()

    const isCoronaDetected = randomBoolean(positiveResultPercentage)
    setDetectionResult(isCoronaDetected)
    takePhoto().then(() => history.push("/analyze"))
  }

  return (
    <IonPage>
      <IonContent className="main">
        <IonGrid className="scan-main-grid">
          <IonRow className="ion-align-items-center">
            <IonCol>
              <IonText className="instructions" color="black">
                <h1 style={{ fontSize: "3rem" }}>Coronavirus</h1>
                <h2 style={{ fontSize: "2.5rem" }}>Detector</h2>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <IonButton
                style={{ margin: "0 1rem" }}
                color="warning"
                size="large"
                shape="round"
                expand="block"
                onClick={onTakePhoto}
              >
                Scan
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center">
            <IonCol>
              <IonButton
                className="settings-btn"
                shape="round"
                color="warning"
                fill="outline"
                routerLink="/settings"
              >
                <IonIcon icon={settingsSharp} />
              </IonButton>
              <IonButton
                onClick={() => setShowDisclaimer(true)}
                className="disclaimer-btn"
                shape="round"
                color="warning"
                fill="outline"
              >
                <IonIcon icon={helpCircleSharp} />
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <HelpModal
          isOpen={showDisclaimer}
          onDismiss={() => setShowDisclaimer(false)}
        />
      </IonContent>
    </IonPage>
  )
}

export default Main
