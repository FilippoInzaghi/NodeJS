// process.argv.slice(2,3)

const parseArgs = require("minimist");
const colors = require('colors');

const command = parseArgs(process.argv.slice(2, 3));
delete command._;
console.log(command);

const handleCommand = ({ add, remove, list }) => {
  console.log(add, remove, list);
  if (add) {
    if (typeof add !== "string") {
      return console.log("Wpisz nazwę dodawanego zadania(tekst!!!!)".red);
    } else if(add.length < 7){
        return console.log("Nazwa zadania musi mieć więcej niż 6 znaków!".red);
    }
    // handleData();
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
        return console.log("Wpisz nazwę usuwanego zadania(tekst co najmniej 7 znaków)".red);
      }
    //   handleData();
  } else if (list || list === "") {
      handleData()
  } else {
      console.log('Nie rozumiem polecenia. Użyj --add="nazwa zadania". --remove="nazwa zadania" lub opcji --list'.red);
  }
};

// handleData() {
// return 3
// }

handleCommand(command);
