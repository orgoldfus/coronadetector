import React, { useState, useEffect } from "react"
import { Plugins } from "@capacitor/core"
import "./Settings.css"
import { close } from "ionicons/icons"
import {
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRange,
  IonRow,
  IonText,
  IonButton
} from "@ionic/react"
const { Storage } = Plugins

const Settings: React.FC = () => {
  const [
    positiveDetectionPercentage,
    setPositiveDetectionPercentage
  ] = useState(30)

  useEffect(() => {
    const getPositiveDetectionPercentage = async () => {
      const pdPercentage = await Storage.get({
        key: "positiveDetectionPercentage"
      })

      if (pdPercentage.value) {
        setPositiveDetectionPercentage(+pdPercentage)
      }
    }

    getPositiveDetectionPercentage()
  }, [])

  const onDetectPercentChange = (event: any) => {
    setPositiveDetectionPercentage(event.detail.value)
  }

  const onSaveSettings = async () => {
    await Storage.set({
      key: "positiveDetectionPercentage",
      value: positiveDetectionPercentage.toString()
    })
  }

  return (
    <IonPage>
      <IonContent>
        <IonGrid className="result-container">
          <IonRow className="image-container">
            <IonCol>
              <IonText>
                <h1>Settings</h1>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel className="ion-text-wrap">
                  <IonText color="primary">
                    <h1>True detection %</h1>
                  </IonText>
                </IonLabel>
                <IonRange
                  pin={true}
                  onIonChange={onDetectPercentChange}
                  value={positiveDetectionPercentage}
                />
              </IonItem>
              <IonButton onClick={onSaveSettings}>Save</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Settings
