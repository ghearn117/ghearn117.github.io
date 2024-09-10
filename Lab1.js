function Lab1(){
	var sum = 0;
	var array = [];
	for(var i = 0; i < 5; i++){
		var rand = Math.random();
		rand *= 100;
		rand = Math.floor(rand);
		sum += rand;
		array.push(rand);
	}
	var mean = sum/array.length;
	console.log(mean);
	var greater = []
	for(var i = 0; i < 5; i++){
		if(array[i] > mean){
			greater.push(array[i]);
		}
	}
	document.querySelector("#arrayOut").innerHTML="The array is:"+array+"<br>The mean is:"+mean+"<br>Greater:"+greater;
}