const fs = require('fs');


const handleData = (type, title) => {
    //type - number (1 - add, 2 - remove, 3 - list)
    //title (string || null)
    const data = fs.readFileSync('datadb.json');
    const tasks = JSON.parse(data)
    console.log(tasks);
    
    if (type === 1 || type === 2){
      const isExisted = tasks.find(task => task.title === title) ? true : false;
      if (type === 1 && isExisted){
          return console.log("Takie zadanie już istnieje".red);
      } else if (type === 2 && !isExisted){
        return console.log("Takie zadanie nie istnieje. Nie mogę go usunąć!".red);
      }
    }
    
    let dataJSON = '';
    switch (type){
      case 1: 
      const id = tasks.length;
      tasks.push({id, title});
      console.log(tasks);
      dataJSON = JSON.stringify(tasks);
      fs.writeFileSync('datadb.json', dataJSON);
      console.log(`Dodaję zadanie ${title}`.white.bgGreen);
      break;
      case 2:
      const indexToRemove = tasks.findIndex(task => task.title === title) 
      tasks.splice(indexToRemove, indexToRemove + 1);
      tasks.map((task, index) => task.id = index);
      dataJSON = JSON.stringify(tasks);
      fs.writeFile('datadb.json', dataJSON, 'utf8', (err) => {
        if (err) throw err;
        console.log(`Zadanie ${title} zostało usunięte`.white.bgGreen);
      })
      console.log(tasks);
      break;
      case 3: 
      console.log(`Lista zadań do zrobienia obejmuje ${tasks.length} pozycji. Do zrobienia masz:`);
      if (tasks.length) {
        tasks.forEach((task, index) => {
          if (index % 2){
            return console.log(`${task.title}`.green);
          } else return console.log(task.title.yellow);
        });
      }
      break;
    }
    }

    module.exports = handleData;