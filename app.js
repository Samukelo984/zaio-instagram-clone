class App {
    constructor() {
        this.$app = document.querySelector("#app"); 
        this.$firebaseAuthContainer = document.querySelector("#firebaseui-auth-container"); 
        this.$logoutButton = document.querySelector(".logout")
        this.$upload = document.querySelector(".upload"); 
        this.$createPost = document.querySelector(".create-post"); 
        this.$backArrow = document.querySelector("#back-arrow"); 
          
        this.ui = new firebaseui.auth.AuthUI(auth); 
          
 
         this.addEventListeners(); 
         this.handleAuth(); 

         this.$logoutButton.addEventListener("click", (event) => {
             this.handleLogout(); 
         }); 
    };  

    // FUNCTION TO HANDLE THE AUTHENTICATION OF A USER
     handleAuth() {
   firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            this.redirectToApp();
          } else {
        this.redirectToAuth();
          }
        });
       };

       handleLogout() {
           firebase.auth().signOut().then(() => {
               this.redirectToAuth(); 
           }).catch((error) => {
               console.log("error"); 
           });
       };
   
       redirectToApp() {
         this.$firebaseAuthContainer.style.display = "none";
         this.$app.style.display = "block";
       }
    
      redirectToAuth() {
        this.$firebaseAuthContainer.style.display = "block";
        this.$app.style.display = "none";

        this.ui.start("#firebaseui-auth-container", {
            signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
           }); 
      }; 

    // EVENT LISTENERS  
    addEventListeners() {
        document.body.addEventListener("click",(event) => {
            this.handleUploadClick(event); 
            this.handleUploadClose(event); 
        });
    };

    // FUNCTION TO HANDLE THE OPENING AND CLOSING OF THE CREATE-POST DIV
    handleUploadClick(event) {
        const isUploadClickedOn = this.$upload.contains(event.target);
        const isCreatePostClickedOn = this.$createPost.contains(event.target);

        if(isUploadClickedOn) {
            this.$createPost.style.display = "block"; 
        }; 
    }; 

    handleUploadClose(event) {
        const isBackArrowClickedOn = this.$backArrow.contains(event.target); 

        if(isBackArrowClickedOn) {
            this.$createPost.style.display = "none"; 
        };  
    }; 
};  

const app = new App (); 

  