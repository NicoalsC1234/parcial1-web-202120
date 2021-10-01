const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  //Asumiendo que data es el arreglo que me llega de ljson :)
  let ar = []
  let l = []
  for (let index = 0; index < data.length; index++) {
    const suma1 = data[index].h_in;
    for (let index2 = index+1; index2 < data.length; index2++) {
      const suma2 = data[index2].h_in;
      if(suma1+suma1 === resp){
        l.push(data[index])
        l.push(data[index2])
        ar.push(l)
      }

    }
  }

  
  return resp.json(ar);
};

module.exports = { getPairsOfPlayers };
