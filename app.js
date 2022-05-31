
class App {
    constructor() {
        this.$upload = document.querySelector(".upload"); 
        this.$createPost = document.querySelector(".create-post");
        
 
        this.addEventListeners(); 
    }; 

    // EVENT LISTENERS FOR ENTIRE BODY 
    addEventListeners() {
        document.body.addEventListener("click",(event) => {
            this.handleUploadClick(event); 
        });
    };

    // FUNCTION TO HANDLE CREATE-POST DIV
    handleUploadClick(event) {
        const isUploadClickedOn = this.$upload.contains(event.target);
        const isCreatePostClickedOn = this.$createPost.contains(event.target);

        if(isUploadClickedOn) {
            this.$createPost.style.display = "block"; 
        }; 
    }; 
};  

const app = new App (); 