// Hexadecimal Generator
// This Hexadecimal Generator for interview purpose only
// Created by Prayoga Antaras Putra

const GenerateHex = () => [...Array(8)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
const listOfHexSpeak = [
  'dead', 'beef', '0ff1ce', '01234567', 'aaaaaaaa', '4b1d', 'babe', 'bad', 'f00d', 'b105', 'b00b5',
  'cafe', 'b0ba', 'b00', '0ff', 'coo1', 'do6', 'd00d', 'face', 'f4ce', 'f4c3'
]


const getTwoFA = () => {
  while (true) {
    let TwoFA = GenerateHex();
    if (!listOfHexSpeak.some(v => TwoFA.includes(v))) {
      return TwoFA;
    } else {
      console.log('Regenerate Hex');
    }
  }
}

// for testing how lucky we are to get the listOfHexSpeak :)
// for (let index = 0; index < 10000000; index++) {
//   getTwoFA(); 
// }

console.log(getTwoFA());