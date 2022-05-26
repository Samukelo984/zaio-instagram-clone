 
class App {
    constructor() {
this.$app = document.querySelector("#app");
this.$firebaseAuthContainer = document.querySelector("#firebaseui-auth-container"); 
this.$logoutButton = document.querySelector(".logout");  
this.ui = new firebaseui.auth.AuthUI(auth); 

this.$app.style.display = "none";  

this.handleAuth();    
this.$logoutButton.addEventListener("click", (event) =>{
    this.handleLogOut(); 
});

} 

handleAuth() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            console.log(user) 
            this.redirectToApp(); 
        } else {
            this.redirectToAuth(); 
        };
    }); 
     
};

handleLogOut() {
    firebase.auth().signOut().then(() => {
        this.redirectToAuth();
    }).catch((error) => {
        console.log("Error Occured");
    }); 
};
 
redirectToApp() {
    this.$firebaseAuthContainer.style.display = "none"; 
    this.$app.style.display="block"; 
};
redirectToAuth() {
    this.$firebaseAuthContainer.style.display = "block"; 
    this.$app.style.display="none"; 

    this.ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // Other config options...
      }); 
};



}; 
 


const app = new App();   