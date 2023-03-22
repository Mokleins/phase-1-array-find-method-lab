// code your solution here

function superbowlWin(record) {
  if(record.find(isWinner) !== undefined){
    return record.find(isWinner).year;
  };
 
}

function isWinner(record) {
  return record.result === "W";
}
