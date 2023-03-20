const cardContainer = document.getElementById('card-character')
const btnGenerateCard = document.getElementById('generateCard')
const idPersonagem = document.getElementById('idPersonagem')



btnGenerateCard.addEventListener('click', generateCard)
idPersonagem.value = 1;



function fetchCharacters(id){
   try{
        const response = fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {

            return data
        
        })

        return response
   }
   catch(erro){
        console.log(erro)
   }
   
}



 async function generateCard(){
    if(idPersonagem.value === ''){
        alert('Escolha um numero e preencha o campo para gerar um personagem!')
        idPersonagem.style.border = "4px solid red";
    }else{
        idPersonagem.style.border = "4px solid white";
        const data = await fetchCharacters(idPersonagem.value)
        createCard(data)
    }
   

}






function createCard(data){
   cardContainer.innerHTML = `
    
         <div class="character__img animate" style="background-image: url('${data.image}');"></div>
         <div class="content__character animate">
            <h1 class="name__character">${data.name}</h1>
            <div class="status">
                <span class="attributes">Status:</span>
                <span class="value">${data.status}</span>
           </div>
             

           <div class="specie">
                <span class="attributes">Specie:</span>
                <span class="value">${data.species}</span>
            </div>
           
            <div class="gender">
             <span class="attributes">Gender:</span>
             <span class="value">${data.gender}</span>
            </div>
           
            <div class="origin">
             <span class="attributes">Origin:</span>
             <span class="value">${data.origin.name}</span>
            </div>

            <div class="location">
            <span class="attributes">Location:</span>
            <span class="value">${data.location.name}</span>
           </div>


         </div><!--content__character-->
    
    `   
}

generateCard();





























