// lo primero es crear al archivo json que lo podemos realizar de la siguiente manera
const bd =[
    {"Id":0,"Apellido":"Mendoza", "Nombre":"Eddy", "Semestre": "Quinto", 
    "Paralelo":"A", "Direccion":"Montecristi", "Telefono": "0987654321",
    "Correo":"eddy@gmail.com"},
    {"Id":1,"Apellido":"Alcivar", "Nombre":"Marcos", "Semestre": "Quinto", 
    "Paralelo":"B", "Direccion":"Manta", "Telefono": "0987654322",
    "Correo":"marcos@gmail.com"},
    {"Id":2,"Apellido":"Zambrano", "Nombre":"Evelyn", "Semestre": "Quinto", 
    "Paralelo":"A", "Direccion":"Montecristi", "Telefono": "0987654323",
    "Correo":"evelyn@gmail.com"},
    {"Id":3,"Apellido":"Espinoza", "Nombre":"Andres", "Semestre": "Quinto", 
    "Paralelo":"A", "Direccion":"Portoviejo", "Telefono": "0987654324",
    "Correo":"andres@gmail.com"},
    {"Id":4,"Apellido":"Mendoza", "Nombre":"Maria", "Semestre": "Quinto", 
    "Paralelo":"B", "Direccion":"Montecristi", "Telefono": "0997654321",
    "Correo":"maria@gmail.com"},
    {"Id":5,"Apellido":"Alvia", "Nombre":"Jonathan", "Semestre": "Quinto", 
    "Paralelo":"C", "Direccion":"Montecristi", "Telefono": "0987654311",
    "Correo":"jona@gmail.com"},
    {"Id":6,"Apellido":"Mendoza", "Nombre":"Lupe", "Semestre": "Quinto", 
    "Paralelo":"B", "Direccion":"Manta", "Telefono": "0985654321",
    "Correo":"lupe@gmail.com"},
    {"Id":7,"Apellido":"Lucas", "Nombre":"Luis", "Semestre": "Quinto", 
    "Paralelo":"A", "Direccion":"Montecristi", "Telefono": "0987644321",
    "Correo":"luis@gmail.com"},
    {"Id":8,"Apellido":"Arteaga", "Nombre":"Juan", "Semestre": "Cuarto", 
    "Paralelo":"A", "Direccion":"Manta", "Telefono": "0977654321",
    "Correo":"juan@gmail.com"},
    {"Id":9,"Apellido":"Flores", "Nombre":"Anthony", "Semestre": "Cuarto", 
    "Paralelo":"A", "Direccion":"Los Bajos", "Telefono": "0987655321",
    "Correo":"anthony@gmail.com"}
]
// creamos un const el cual va a atender nuestro botones que tienen los nombre
//y nos permitiran dar click para ver los demas detalles  
const estudiantes = document.querySelectorAll('.nombre_estudiante');

estudiantes.forEach((estudiante)=>{
    estudiante.addEventListener('click', (nombre)=>{
        //creamos un lef denominado id que va a contender el atributo id
        //de los botones de la lista disponible
        let id=nombre.target.getAttribute('estu-id');
        //recorremos nuesta json denominado bd
        bd.forEach((estudiante)=>{
            //si nuestro lef id es igual al valor de id de nuestro arreglo json hacemos:
            if(id == estudiante.Id){
                const verDetalle=nombre.target.parentElement.lastElementChild;
                //pintamos los valores del arreglo json en la siguiente extructura
                verDetalle.innerHTML=`
                                    <div class="lista">
                                        <div class="nom">
                                        <h2>Nombre:</h2>
                                        <p>${estudiante.Nombre}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Apellido:</h2>
                                            <p>${estudiante.Apellido}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Correo:</h2>
                                            <p>${estudiante.Correo}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Telefono:</h2>
                                            <p>${estudiante.Telefono}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Direccion:</h2>
                                            <p>${estudiante.Direccion}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Semestre:</h2>
                                            <p>${estudiante.Semestre}</p>
                                        </div>
                                        <div class="nom">
                                            <h2>Paralelo:</h2>
                                            <p>${estudiante.Paralelo}</p>
                                        </div> 
                                    </div>`

            }
        })
    })
})

