function open(a){
if(a == 1){
allmessage.style.display='block';
allword.style.display='none';
newword.style.display='none';
newboard.style.display='none';
}
else if(a == 2){
allmessage.style.display='none';
allword.style.display='block';
newword.style.display='none';
newboard.style.display='none';
}
else if(a==3){
allmessage.style.display='none';
allword.style.display='none';
newword.style.display='block';
newboard.style.display='none';
}
else{
allmessage.style.display='none';
allword.style.display='none';
newword.style.display='none';
newboard.style.display='block';
}
}