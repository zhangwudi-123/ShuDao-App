import { Camera } from '@ionic-native/camera';

const options = {
  quality: 100,
  destinationType: Camera.DestinationType.DATA_URL,
  encodingType: Camera.EncodingType.JPEG,
  mediaType: Camera.MediaType.PICTURE
};

export const takePicture = (opt = options) => {
  return Camera.getPicture(options).then(imageData => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    return 'data:image/jpeg;base64,' + imageData;
  });
};
