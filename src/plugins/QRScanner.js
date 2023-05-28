import { QRScanner } from '@ionic-native/qr-scanner';

let scanSub;

export const scan = () => {
  return QRScanner.prepare().then(status => {
    console.log(status);
    if (status.authorized) {
      // camera permission was granted

      // start scanning
      QRScanner.show();
      // eslint-disable-next-line compat/compat
      return new Promise((resolve, reject) => {
        scanSub = QRScanner.scan().subscribe(text => {
          cancel();
          resolve(text);
        });
      });
    } else if (status.denied) {
      // camera permission was permanently denied
      // you must use QRScanner.openSettings() method to guide the user to the settings page
      // then they can grant the permission from there
      return 'denied';
    } else {
      // permission was denied, but not permanently. You can ask for permission again at a later time.
      return 'something wrong';
    }
  });
};

export const cancel = () => {
  if (scanSub) {
    console.log('cancel QRScanner');
    QRScanner.hide(); // hide camera preview
    scanSub.unsubscribe(); // stop scanning
  }
  QRScanner.destroy();
};

export const toggleCamera = () => {
  QRScanner.getStatus(status => {
    QRScanner.useCamera(status.currentCamera ? 0 : 1);
  });
};
export const toggleLight = () => {
  QRScanner.getStatus(status => {
    status.lightEnabled ? QRScanner.disableLight() : QRScanner.enableLight();
  });
};
