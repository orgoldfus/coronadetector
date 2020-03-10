import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { DEFAULT_POSITIVE_DETECTION_RATE } from "../../constants"
import { fetchDataFromStorage, saveDataToStorage } from "../../utils/storage"
import "./Settings.css"
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
  const [positiveDetectionRate, setPositiveDetectionRate] = useState(
    DEFAULT_POSITIVE_DETECTION_RATE
  )
  const history = useHistory()

  useEffect(() => {
    const getPositiveDetectionRate = async () => {
      const pdPercentage = await fetchDataFromStorage("positiveDetectionPercentage")

      if (pdPercentage) {
        setPositiveDetectionRate(+pdPercentage)
      }
    }

    getPositiveDetectionRate()
  }, [])

  const onDetectPercentChange = (event: any) => {
    setPositiveDetectionRate(event.detail.value)
  }

  const onSaveSettings = async () => {
    await saveDataToStorage("positiveDetectionPercentage", positiveDetectionRate)
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
                  value={positiveDetectionRate}
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
