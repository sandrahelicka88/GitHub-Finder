//initialize UI
const ui = new UI;
//initialize GitHub
const github = new GitHub;
// search user
const searchUser = document.getElementById('user');
//add event listener
searchUser.addEventListener('keyup', (e)=>{
  const userInput = e.target.value;
  if (userInput !== ''){
    github.getUser(userInput).then(data=> {
      if(data.profile.message === 'Not Found'){
        ui.showAlert('User not found', 'alert alert-danger');
      }else{
        ui.showProfile(data.profile);
      }
    })
  }else{
    ui.clearProfile();
  }
});
