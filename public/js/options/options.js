function Options() {
    this._current = [];
}
// Saves options to localStorage.
Options.prototype.save = function() {
    localStorage["cellphone"] = document.getElementById("cellphone").value;
    localStorage["email"] = document.getElementById("email").value;

}

// Restores select box state to saved value from localStorage.
Options.prototype.restore = function() {
    var myCellPhone = localStorage.cellphone;
    var myEmail = localStorage.email;

    if(!myCellPhone) return;
    if(!myEmail) return;

    document.getElementById("cellphone").value = myCellPhone;
    document.getElementById("email").value = myEmail;
}
