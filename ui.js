class UI{
  constructor(){
    this.profile = document.getElementById('profile')
  }
  //show profile
  showProfile(user){
    this.profile.innerHTML =`
      <div class= "card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary  btn-block mb-5">View Profile</a>
          </div>
          <div claa="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span> 
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span> 
            <span class="badge badge-successs">Followers: ${user.followers}</span> 
            <span class="badge badge-info">Following: ${user.following}</span> 
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Webside/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h2 class="page-heading mb-4">Latest Repos</h2>
      <div id="repos"></div>
      `;
     }
  
  //show alert message
  showAlert(message,className){
    //clear remaining alerts
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div,search);
    //timeout after 3 s
    setTimeout(()=>{
      this.clearAlert();
    },3000);

  }
  //clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if (currentAlert){
      currentAlert.remove();
    }
  }


  //clear profile 
  clearProfile(){
    this.profile.innerHTML = '';
  }
}