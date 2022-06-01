
        this.$send = document.querySelector("#send"); 
         
var files = [];
document.getElementById("files").addEventListener("change", function(e) {
    files = e.target.files; 
}); 

document.getElementById("send").addEventListener("click", function() {
    // CHECKS IF FILES ARE SELECTED
    if(files.length !=0) {
        // LOOPS THROUGH ALL SELECTED FILES
        for(let i = 0; i < files.length; i++) {
            // CREATE STORAGE REFERENCE 
            var storage = firebase.storage().ref(files[i].name); 
            // UPLOAD A FILE
            var upload = storage.put(files[i]); 

            // UPDATE ON PROGRESS BAR
            upload.on(
                "state_changed",
                function progress(snapshot) {
                    var percentage = 
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
                    document.getElementById("progress").value = percentage; 
                }, 

                function error() {
                    alert("error uploading file"); 
                }, 

                function complete() {
                    document.getElementById(
                        "uploading"
                    ).innerHTML += `${files[i].name} uploaded <br />`; 
                }
            );
        }
    } else {
        alert("No file chosen"); 
    }
        
});

var storage = firebase.storage().ref("ip13.jpg"); 
console.log("HI", storage);  

storage
.getDownloadURL() 
.then(function (url) {
    console.log(url); 
})
.catch(function(error) {
    console.log("error encountered");  
})
  