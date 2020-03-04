import React, { useState } from "react"
import "./TakeSelfie.css"
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonModal,
  IonRow,
  IonText
} from "@ionic/react"
import { helpCircleSharp, settingsSharp } from "ionicons/icons"

interface TakeSelfieProps {
  takePhoto: any
}

const TakeSelfie: React.FC<TakeSelfieProps> = ({ takePhoto }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  return (
    <React.Fragment>
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
              onClick={takePhoto}
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
      <IonModal
        isOpen={showDisclaimer}
        onDidDismiss={() => setShowDisclaimer(false)}
        showBackdrop={true}
        swipeToClose={true}
        cssClass={"disclaimer-modal"}
      >
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Disclaimer</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="disclaimer-modal-text">
              <p>
                {`The purpose of the app is to reduce the tension surrounding the coronavirus world wide.`}
              </p>
              <p>{`We believe that a good laugh do wonders to your immune system :)`}</p>
            </div>
            <div className="disclaimer-modal-close">
              <p>{"(swipe down to dismiss this message)"}</p>
            </div>
          </IonCardContent>
        </IonCard>
      </IonModal>
    </React.Fragment>
  )
}

export default TakeSelfie
