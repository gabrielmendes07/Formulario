function validateform() {
    var nome = document.forms["forma1"]["nome"].value;
    if (nome == "") {
        alert("Name must be filled out");
        
    }
}