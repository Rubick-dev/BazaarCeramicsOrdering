

function InsertImageSlices() {
  let dispImg = "";
  let dirName = "../../images/slicedimages/"
  let fileName= "bcpot002_r"
  let row, col;
  
  for(let row = 0; row < 4; row++){
    dispImg += "<tr>"
    for(let col = 0; col <  5; col++){
      dispImg += "<td>"
      dispImg += `<img src="${dirName}${fileName}${row+1}_c${col+1}.jpg"</td>`
    }
    dispImg += "</tr>"
  document.getElementById('imageSlices').innerHTML = dispImg;
  }
}

