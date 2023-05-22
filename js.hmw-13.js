var index = 1;

while(index <= 50){
    if(index %2 == 0){
        document.write("<p style=' color:green'> " + index + "," + "</p>");
    
    } else if(index %2 == 1){
        document.write("<p style='color:red'>" + index + "," + "</p>" );

        
    }
    index++;
}