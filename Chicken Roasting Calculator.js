function cookingTime(weight){
  let tim = ((20*(weight / 0.45) + 20) );
  let hrs = Math.floor(tim / 60) ;
  let min = Math.ceil((tim % 60) / 5) * 5
  if (weight == 0) {
    return 'There is no chicken!'  ; 
  }
  

  if (hrs < 1 && min < 60 && min > 0 ) {
    return( String(min) + ' mins');
  } else if (hrs == 1 && min < 60 && min > 0) {
    return(String(hrs) + ' hr ' + String(min) + ' mins')
  } else if ( min == 60 && min > 0){
    return(String(hrs + 1) + ' hrs' )   
  } else if (hrs > 1 && min < 60 && min > 0){
    return(String(hrs) + ' hrs ' + String(min) + ' mins')
  } else if ( min == 0 ){
    return(String(hrs) + ' hrs')
  }  
}