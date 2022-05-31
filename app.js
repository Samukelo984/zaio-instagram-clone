
class App {
    constructor() {
        this.$upload = document.querySelector(".upload"); 
        this.$createPost = document.querySelector(".create-post"); 
        this.$backArrow = document.querySelector("#back-arrow"); 
        
 
        this.addEventListeners(); 
    }; 

    // EVENT LISTENERS FOR ENTIRE BODY 
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