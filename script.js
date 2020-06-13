var canvas = document.getElementById("game"); 
var width = 4;
var height = 4;
document.getElementById('canva').style.height = (height ) * 100 + "px"
document.getElementById('canva').style.width = (width ) * 100 + "px"
document.getElementById('canva').style.margin = "0 auto"

canvas.width = canvas.parentNode.clientWidth;
canvas.height = canvas.parentNode.clientHeight;
var c = canvas.getContext('2d');
c.clearRect(0, 0, canvas.width, canvas.height);

drawRoom(width, height)

var roomArray = Array(height ).fill().map(_ => Array(width ).fill(0))


var count = 1;
var firstSpot, secondSpot;
var temp, rawX, rawY;



class spot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static toSpot(x, y)
    {
        return new spot(Math.floor(x / 100), Math.floor(y / 100))
    }
    toString() {return this.x + "," + this.y}

    equalss(other)
    {
        return this.x == other.x && this.y == other.y

    }
}

function drawRoom(width, height)
{
    for (var x = 0; x < width; x++)
        for (var y = 0; y < height; y++)
            c.strokeRect(100 * x, 100 * y, 100, 100);
}
var palcehold = 0;
var moving = false;
window.addEventListener("mousedown", function() {

        moving = true;

        rawX = event.x - canvas.offsetLeft
        rawY = event.y - canvas.offsetTop

        var xPos = (rawX - rawX % 100)/100 
        var yPos = (rawY - rawY % 100)/100 
        firstSpot = new spot(xPos, yPos)

        
});
var placehold = -1
window.addEventListener("mouseup", function() {
  
        moving = false
        rawX = event.x - canvas.offsetLeft
        rawY = event.y - canvas.offsetTop

        var xPos = (rawX - rawX % 100)/100 
        var yPos = (rawY - rawY % 100)/100 

        secondSpot = new spot(xPos, yPos)
        this.console.log(firstSpot + " " + secondSpot)
        if (!secondSpot.equalss(firstSpot))
        {          
            this.console.log("dif")

                var temp = roomArray[firstSpot.y][firstSpot.x]
                roomArray[firstSpot.y][firstSpot.x] = roomArray[secondSpot.y][secondSpot.x] 
                roomArray[secondSpot.y][secondSpot.x] = temp
        }
        else
        {
            this.console.log("same")
            if (roomArray[yPos][xPos] == 0)
            {    

                    roomArray[yPos][xPos] = count
                    count++;
            }
            else
            {
                for (var y = 0; y < roomArray.length; y++)
                    for (var x = 0; x < roomArray[0].length; x++)
                            if (roomArray[y][x] != 0 && roomArray[y][x] > roomArray[yPos][xPos])  
                                roomArray[y][x]-=1
                                roomArray[yPos][xPos]=0
                                count--;

            
            }
        }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.strokeStyle = "black"
        
            drawRoom(width, height)
                for (var y = 0; y < roomArray.length; y++)
                    for (var x = 0; x < roomArray[0].length; x++)
                        {
                            if (roomArray[y][x] != 0)        
                            {
                                c.fillStyle = "black"
                                c.fillRect(x*100, y*100, 100, 100)
                        
                                c.font = "30px Arial"
                                c.textAlign = "center"
                                c.fillStyle = "white"
                                c.fillText(roomArray[y][x] + "", x*100 + 50, y*100 + 60); 
                            }
            
                        }
        
})
window.addEventListener("mousemove", function() {
    
    if (moving)
    {
        rawX = event.x - canvas.offsetLeft
        rawY = event.y - canvas.offsetTop

        var x = (rawX - rawX % 100)/100 
        var y = (rawY - rawY % 100)/100 
                        
                
        c.fillStyle = "rgb(100,100,100)"
        c.fillRect(x*100, y*100, 100, 100)

    }

    
            
})





    
    
function func() {
  roomArray = Array(height ).fill().map(_ => Array(width ).fill(0))
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawRoom(width, height)
    count = 1
}
console.log(canvas.offsetWidth)



var a = new spot(1,1)
var b = new spot(1,1)
console.log(a.equalss(b))