import React, { useState } from "react"
import MainPage from "./pages/Main"
import AnalyzeSelfie from "./pages/AnalyzeSelfie"
import Settings from "./pages/Settings"
import { IonApp, IonRouterOutlet } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Route } from "react-router-dom"
import { useCameraCapabilities } from "./hooks/useCameraCapabilities"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/display.css"

/* Theme variables */
import "./theme/variables.css"

const positiveResultPercentage = 30

const App: React.FC = () => {
  const { photo, takePhoto, clearPhoto } = useCameraCapabilities()
  const [detectionResult, setDetectionResult] = useState()

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet
        // animated={false}
        >
          <Route
            path="/"
            render={() => (
              <MainPage
                takePhoto={takePhoto}
                positiveResultPercentage={positiveResultPercentage}
                setDetectionResult={setDetectionResult}
              />
            )}
            exact={true}
          />
          <Route
            path="/analyze"
            render={() => (
              <AnalyzeSelfie
                photo={photo}
                clearPhoto={clearPhoto}
                isCoronaDetected={detectionResult}
              />
            )}
            exact={true}
          />
          <Route path="/settings" render={() => <Settings />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}
export default App
