fetch('http://localhost:3000/Grupos')
.then(res => res.json())
.then(data =>{

    const element = document.getElementById('elem')
    element.innerHTML = `<p>${data.Id_GruCuat}</p>`

    console.log({data})
}).catch(err => console.log(err))