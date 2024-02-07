

// MyQRCodeComponent.js

import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';



function getRandomNumber() {
  return Math.floor(Math.random() * 255); // Generates a random number between 0 and 255
}
function getRandomAsciiCharacter() {
  const randomNum = getRandomNumber();
  return String.fromCharCode(randomNum);
}
function generateRandomString() {
  let randomString = '';
  for (let i = 0; i < 32; i++) {
    randomString += getRandomAsciiCharacter();
  }
  return randomString;
}




const MyQRCodeComponent = () => {
  // Replace this with your actual generated string
  const randomString = 'YourGeneratedStringHere';

  return (
    <View>
      <QRCode
        value={randomString}
        size={250} // Set the desired size of the QR code
        bgColor="#000" // Background color
        fgColor="#fff" // Foreground color
      />
    </View>
  );
};

export default MyQRCodeComponent;
