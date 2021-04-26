const candidatosBtn = document.getElementById('candidatosBtn');
const votacionesBtn = document.getElementById('votacionesBtn');

const id1 = document.getElementById('id1');
const nombre = document.getElementById('nombre');
const registrarBtn = document.getElementById('registrarBtn');

const id2 = document.getElementById('id2');
const votarBtn = document.getElementById('votarBtn');

const database = firebase.database();

verCandidatos = ()=>{
    
    database.ref('candidatos').on('value',function(data){

        data.forEach(

            function(candidato){
                let clave = candidato.key;
                let valor = candidato.val();
                alert("ID: "+valor.identificacion+"="+valor.nombre+"\n")
            }
        );

    });
}

candidatosBtn.addEventListener('click', verCandidatos);

verVotaciones = ()=>{
    alert("verVotaciones");
}

votacionesBtn.addEventListener('click', verVotaciones);

registrar = ()=>{

    let id = id1.value;
    let n = nombre.value;

    if(id=== '' || n=== ''){
        alert('Ingrese todos los campos')
        return;
    }

    let objetoCandidato = {
        identificacion: id,
        nombre: n
    };

    

    database.ref('candidatos/'+id).set(objetoCandidato);
}

registrarBtn.addEventListener('click', registrar);

votar = ()=>{
    
    let idvotar = id2.value;
    const fecha = Date.now();
    const fechaactual = new Date(fecha);

    fechaactual.toDateString;

    alert(fechaactual);

    if(idvotar=== ''){
        alert('Ingrese el ID del candidato')
        return;
    }

    let objetoVoto = {
        identificacion: idvotar,
        fecha: fechaactual
    };

    database.ref('votos/'+idvotar).set(objetoVoto);
}

votarBtn.addEventListener('click', votar);