import React from "react"
import { useHistory } from "react-router-dom"
import "./Settings.css"
import { useDetectionRate } from "../../hooks/useDetectionRate"
import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonPage,
  IonRange,
  IonRow,
  IonText,
  IonButton
} from "@ionic/react"

const Settings: React.FC = () => {
  const {
    detectionRate,
    setDetectionRate,
    saveDetectionRate
  } = useDetectionRate()
  const history = useHistory()

  const onDetectPercentChange = (event: any) => {
    setDetectionRate(event.detail.value)
  }

  const onSaveSettings = async () => {
    saveDetectionRate()
    history.replace("/")
  }

  const onCancel = async () => {
    history.replace("/")
  }

  return (
    <IonPage>
      <IonContent>
        <IonGrid className="settings-wrapper">
          <IonRow className="title-wrapper">
            <IonCol>
              <IonText>
                <h3>Settings</h3>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="options-wrapper">
            <IonCol>
              <IonItem>
                <IonLabel className="ion-text-wrap">
                  <IonText color="primary">
                    <h1>Positive detection rate</h1>
                  </IonText>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonRange
                  pin={true}
                  onIonChange={onDetectPercentChange}
                  value={detectionRate}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="buttons-wrapper">
            <IonCol className="button-wrapper">
              <IonButton color="medium" onClick={onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol className="button-wrapper">
              <IonButton color="primary" onClick={onSaveSettings}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Settings
