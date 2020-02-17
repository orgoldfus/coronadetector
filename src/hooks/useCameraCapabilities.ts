import { useState } from "react"
import { useCamera } from "@ionic/react-hooks/camera"
import { useFilesystem } from "@ionic/react-hooks/filesystem"
import {
  CameraResultType,
  CameraSource
} from "@capacitor/core"

export function useCameraCapabilities() {
  const [photo, setPhoto] = useState();
  const { getPhoto } = useCamera();
  const { deleteFile } = useFilesystem();

  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      saveToGallery: false,
      quality: 80
    });

    setPhoto(cameraPhoto.webPath);
  };

  const clearPhoto = () => {
    deleteFile({ path: photo });
    setPhoto(null);
  }

  return {
    takePhoto,
    clearPhoto,
    photo
  };
}