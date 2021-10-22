      // camelCase
      // PascalCase
      // snake_case
      const linksSocialMedia = {
        youtube:'isamensatto',
       github:'isamensatto',
       instagram:'_seatto',
       facebook:'isamensatto',
       twitter:"_seatto"
      }

      function changeSocialMediaLinks(){
      // textContent é usado para acessae o DOM, diretamente com o nome do ID
      //  userName.textContent = 'Marcelo'; 
        for( let li of socialLinks.children ) {
         const social =  li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
     
        alert(li.children[0].href);
        }
      }
      changeSocialMediaLinks();

      function getGitHubProfileInfos(){
        const url = ` https://api.github.com/users/${linksSocialMedia.github}`

        fetch(url).then(response =>  response.json()).then(data => {
          //Data significa os dados da api 
          //userName é o id da minha informação e o textContent serve para mudar o nome que está no meu id
          // então ele chama meu ID passa o DOM pra mudar a informação, e pega o dado da api e acessa a propriedade name  q eu quero pegar por exemplo
            userName.textContent = data.name
            userBio.textContent= data.bio
            userProfileGitHub.href= data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
          })
        }
        

      getGitHubProfileInfos();
