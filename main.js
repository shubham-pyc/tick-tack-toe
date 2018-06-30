window.onload = start
var div;
var turn;
var board;
var size = 3;
var endgameFlag = true;
function start()
{
	board = ["",2,2,2,2,2,2,2,2,2];
	turn =1;
	print('working');
	div = document.getElementById('game');

	div.style.width = size*102+"px";
	for(var i=1;i<=size*size;i++)
	{
		var button = document.createElement('button');
		button.id = i;
		button.innerHTML='    ';
		button.onclick = something;
		var br = document.createElement("br")
		//console.log(button)		
		//div.appendChild('<button id=\"'+i+'\">  </button>');
		div.append(button)
		if(i%size==0)
			div.append(br)	
	}
	print(div)
}

function print(string)
{
	//console.log(string);
}
function something()
{

	if(turn%2==0)
	{
		this.innerHTML = "X";
		this.disabled = true;
		board[this.id] = 3;
	}
	else
	{
		this.innerHTML = "O";
		this.disabled = true;
		board[this.id] = 5;
	}

	turn+=1;
	
	if(turn>5){	
		winner(this);
	}
}
function winner(button)
{
	var p = button.innerHTML;
	var temp = 1;
	var counter=0;

	if(button.id%(size+1)==1) // check whole left diag
	{

		for(var i=1;i<=size*size;i+=(size+1))
		{
			if(document.getElementById(i).innerHTML==p)
			{
				counter+=1;
			}
			else{
				break;
			}
		}
		if(counter===size)
		{
			endGame(p);
		}
	}
	var row = Math.ceil(button.id/size);
	counter=0;
	if(button.id==(row*size)-(row-1))
	{
		for(var i=size;i<=size*size-(size-1);i+=(size-1))
		{
			if(document.getElementById(i).innerHTML==p)
			{
				counter+=1;
			}
			else{
				break;
			}
		}
		if(counter===size)
		{
			endGame(p);
		}

	}

	var row = Math.ceil(button.id/size);
	print(row);
	var counter=0;
	for(var i = (row*size)-(size-1);i<=row*size;i++) // checking the rows
	{
		if(document.getElementById(i).innerHTML==p)
			{
				counter+=1;
				print('hello')
			}
			else{
				break;
			}
	}
	if(counter===size)
	{
		endGame(p);
	}

	var col = (button.id%size==0)?size:(button.id%size);
	var counter=0;
	print(col);
	for(var i = col;i<=(size*(size-1)+col);i+=size) // checking the cols
	{
		if(document.getElementById(i).innerHTML==p)
			{
				counter+=1;
				print('hello')
			}
			else{
				break;
			}
	}
	if(counter===size)
	{
		endGame(p);
	}
	if(turn==size*size+1)
	{
		endGame('no-one');
	}
}
function endGame(player)
{	if(endgameFlag){
		endgameFlag = false;
		setTimeout(function(){
		var end = confirm(player+" wins the game do you want to continue ?");
		if(end)
		{
			location.reload();
		}
		else
		{
			document.write('thank you for playing');
		}
		}, 100);
	}
}