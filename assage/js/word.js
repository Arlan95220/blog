function down(i){
if(i == 1){
if(i1.style.display == 'block'){
i1.style.display = 'none';
}
else{
i1.style.display = 'block';
}
i2.style.display = 'none';
i3.style.display = 'none';
}
else if(i == 2){
if(i2.style.display == 'block'){
i2.style.display = 'none';
}
else{
i2.style.display = 'block';
}
i1.style.display = 'none';
i3.style.display = 'none';
}
else{
if(i3.style.display == 'block'){
i3.style.display = 'none';
}
else{
i3.style.display = 'block';
}
i1.style.display = 'none';
i2.style.display = 'none';
}
}