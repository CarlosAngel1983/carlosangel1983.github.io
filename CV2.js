document.getElementById('DatosPerson').onclick = function (){
    document.getElementById('DatosPersonales').style.visibility = "visible";
    document.getElementById('EstudiosCursados').style.visibility = 'hidden';
    document.getElementById('ExperienciaProfesional').style.visibility = 'hidden';
}

document.getElementById('Estudios').onclick = function (){
    document.getElementById('DatosPersonales').style.visibility = 'hidden';
    document.getElementById('EstudiosCursados').style.visibility = 'visible';
    document.getElementById('ExperienciaProfesional').style.visibility = 'hidden';
}

document.getElementById('Experiencia').onclick = function (){
    document.getElementById('DatosPersonales').style.visibility = 'hidden';
    document.getElementById('EstudiosCursados').style.visibility = 'hidden';
    document.getElementById('ExperienciaProfesional').style.visibility = 'visible';
}