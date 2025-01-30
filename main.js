
document.querySelector('button').addEventListener('click', Quote)

function Quote(){ 

    fetch ('https://animechan.xyz/api/random')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.anime
        document.querySelector('h4').innerText = data.character
        document.querySelector('h2').innerText = data.quote
        
    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
