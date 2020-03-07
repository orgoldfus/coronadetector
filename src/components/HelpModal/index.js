import React from "react"
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonModal,
  IonText
} from "@ionic/react"
import "./HelpModal.css"

export default function HelpModal({ isOpen, onDismiss }) {
  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={onDismiss}
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
            <IonText color="primary">
              <p>
                {`This app doesn't really detect the existance or absence of coronavirus.`}
              </p>
              <p>
                {`The purpose of this app is to reduce the tension surrounding the coronavirus world wide.`}
              </p>
              <p>{`We believe that a good laugh do wonders to your immune system :)`}</p>
            </IonText>
          </div>
          <div className="disclaimer-modal-close">
            <IonButton onClick={onDismiss}>Close</IonButton>
          </div>
        </IonCardContent>
      </IonCard>
    </IonModal>
  )
}
