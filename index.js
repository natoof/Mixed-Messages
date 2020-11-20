//Message database
const dataBase = {
  _firstPart: [],
  _secondPart: [],
  _thirdPart: [],
  get firstPart() {
    return this._firstPart;
  },
  set firstPart(string) {
    this._firstPart.push(string);
  },
  get secondPart() {
    return this._secondPart;
  },
  set secondPart(string) {
    this._secondPart.push(string);
  },
  get thirdPart() {
    return this._thirdPart;
  },
  set thirdPart(string) {
    this._thirdPart.push(string);
  },
};

//Randomly build the message
const randNum = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

const messageMixer = () => {
  const firstPartResult =
    dataBase.firstPart[randNum(dataBase._firstPart.length)];
  const secondPartResult =
    dataBase.secondPart[randNum(dataBase._secondPart.length)];
  const thirdPartResult =
    dataBase.thirdPart[randNum(dataBase._thirdPart.length)];
  console.log(`${firstPartResult} ${secondPartResult}! ${thirdPartResult}`);
};

//dataBase filling
dataBase.firstPart = 'Yo';
dataBase.firstPart = 'Wesh';
dataBase.firstPart = 'Kikou';
dataBase.firstPart = 'Yop';
dataBase.firstPart = 'Hey';
dataBase.secondPart = 'les loulous';
dataBase.secondPart = 'bro';
dataBase.secondPart = 'mec';
dataBase.secondPart = 'gonz';
dataBase.secondPart = 'bonhomme ';
dataBase.secondPart = 'couzin';
dataBase.thirdPart = 'Tranquille?';
dataBase.thirdPart = 'La peche?';
dataBase.thirdPart = 'Bien ou bien?';
dataBase.thirdPart = 'Ça farte?';
dataBase.thirdPart = 'Ça gaze?';

//Tests
//console.log(dataBase);

//Run the program
messageMixer();
