class GitHub{
  constructor(){
    this.userId = '679084aad0a39e3f1ff0';
    this.userSecret = 'a4eba94d42462297d893c534433bf068de100593';
  }

  async getUser(user){
    const userProfile = await fetch(`https://api.github.com/users/${user}?user_id=${this.userId}&user_secret=${this.userSecret}`);
    const profile = await userProfile.json();
    return {
      profile
    }
  }
}