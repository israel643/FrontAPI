fetch('http://localhost:3000/Grupos')
.then(res => res.json())
.then(data =>{

    const table = document.getElementById("table-grupos");

    console.log({data})

    data.forEach(grupo => {
        const row = document.createElement('tr');
        row.innerHTML += `
        <td>${grupo.Grado}</td>
        <td>${grupo.Letra}</td>
        <td>${grupo.Turno}</td>
        <td>${grupo.Periodo}</td>
        <td>${grupo.ProgramaEd}</td>
        <td>${grupo.Modalidad}</td>
        <td>${grupo.Extra}</td>
        <button class='btn-danger' onClick={this.removegrupo.bind(this, categoria.id)}>Eliminar</button>
        `;
        table.appendChild(row);
    })
}).catch(err => console.log(err))

fetch('http://localhost:3000/AlumnosPositivos')
.then(res => res.json())
.then(data =>{

    const table = document.getElementById("table-alumnospos");

    console.log({data})

    data.forEach(alumno => {
        const row = document.createElement('tr');
        row.innerHTML += `
        <td>${alumno.NumContagio}</td>
        <td>${alumno.FechaConfirmado}</td>
        <td>${alumno.Matricula}</td>
        <td>${alumno.Nombre}</td>
        <td>${alumno.Ap_pat}</td>
        <td>${alumno.Ap_mat}</td>
        <td>${alumno.Genero}</td>
        <td>${alumno.Riesgo}</td>
        <td>${alumno.Antecedentes}</td>
        <td>${alumno.Extra}</td>
        <button class='btn-danger' onClick={this.removegrupo.bind(this, categoria.id)}>Eliminar</button>
        `;
        table.appendChild(row);
    })
}).catch(err => console.log(err))

fetch('http://localhost:3000/SeguimientoAlumnos')
.then(res => res.json())
.then(data =>{

    const table = document.getElementById("table-seguimiento");

    console.log({data})

    data.forEach(seguido => {
        const row = document.createElement('tr');
        row.innerHTML += `
        <td>${seguido.NumContagio}</td>
        <td>${seguido.Fecha}</td>
        <td>${seguido.Form_Comunica}</td>
        <td>${seguido.Reporte}</td>
        <td>${seguido.Entrevista}</td>
        <td>${seguido.FechaConfirmado}</td>
        <td>${seguido.Nombre + seguido.App + seguido.Apm }</td>
        <td>${seguido.horario}</td>
        <td>${seguido.especialidad}</td>
        <td>${seguido.Extra}</td>
        <button class='btn-danger' onClick={this.removegrupo.bind(this, categoria.id)}>Eliminar</button>
        `;
        table.appendChild(row);
    })
}).catch(err => console.log(err))
