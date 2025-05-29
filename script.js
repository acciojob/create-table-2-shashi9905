function createTable(){
	let rows = prompt("enter a row")
	let coulmn = prompt("enter a coulmn")
	let mytable=document.querySelector("#myTable")
	for (let i=0;i<rows;i++){
		let tr=document.createElement("tr")
		for(let j=0; j<coulmn;j++){
			let td=document.createElement("td")
			td.innerText="a"
			tr.append(td)
			
		}
		mytable.append(tr)
	}
}