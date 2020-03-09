import { useState, useEffect } from "react"
import { Plugins } from "@capacitor/core"
const { Storage } = Plugins

const DEFAULT_POSITIVE_DETECTION_RATE = 30

export function useDetectionRate() {
  const [positiveDetectionRate, setPositiveDetectionRate] = useState(
    DEFAULT_POSITIVE_DETECTION_RATE
  )

  useEffect(() => {
    const getPositiveDetectionRate = async () => {
      const pdPercentage = await Storage.get({
        key: "positiveDetectionPercentage"
      })

      if (pdPercentage.value) {
        setPositiveDetectionRate(+pdPercentage.value)
      }
    }

    getPositiveDetectionRate()
  }, [])

  const setDetectionRate = (newRate) => {
    setPositiveDetectionRate(newRate)
  }

  const saveDetectionRate = async () => {
    await Storage.set({
      key: "positiveDetectionPercentage",
      value: positiveDetectionRate.toString()
    })
  }

  return {
    detectionRate: positiveDetectionRate,
    setDetectionRate,
    saveDetectionRate
  }
}
