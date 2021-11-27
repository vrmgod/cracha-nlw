function showMesomeThing() {
  alert();
}

//let e constc
const linksSocialMedia = {
  github: "vrmgod",
  youtube: "channel/UCfb_SbzaiQuZkiHlVoETunA",
  facebook: "markbrito",
  instagram: "vrmgod",
  twitter: "vrmgod",
};

function chengeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'o furioso'
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    //alert(li.children[0].href)

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

chengeSocialMediaLinks();
//showMesomeThing()
//alert(user.accept)

//função para ir no github e pegar as infos dos usuários e colocar
//no cartão de visitas

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  //arrow functions
  //função contraida
  fetch(url) //pega os dados da url
    .then((response) => response.json()) //transforma os dados da url em json
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userGithub.href = data.html_url;
      userPhoto.src = data.avatar_url
    }); //armazena os dados em json em data
}

getGitHubProfileInfos();
