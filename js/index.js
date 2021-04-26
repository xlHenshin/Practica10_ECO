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
                alert("Información candidato: "+"ID: "+valor.identificacion+"="+valor.nombre+"\n");
            }
        );

    });
}

candidatosBtn.addEventListener('click', verCandidatos);

verVotaciones = ()=>{
    
    database.ref('votos').on('value',function(data){

        data.forEach(

            function(voto){
                let clave = voto.key;
                let valor = candidato.val(fecha);
                alert("Candidato"+clave+" = "+valor+"\n");
            }

        )

    });
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
    alert("Candidato registrado. ID: "+id+", Nombre: "+n);
}

registrarBtn.addEventListener('click', registrar);

votar = ()=>{
    
    let idvotar = id2.value;
    const fecha = Date.now();
    const fechaactual = new Date(fecha);

    let fechastring = fechaactual.toDateString();

    if(idvotar=== ''){
        alert('Ingrese el ID del candidato')
        return;
    }

    let objetoVoto = {fecha: fechastring};

    database.ref('votos/'+idvotar).push().set(objetoVoto);
    alert("Voto realizado. ID del candidato= "+idvotar);
}

votarBtn.addEventListener('click', votar);