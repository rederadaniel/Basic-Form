function resetComment() {
document.getElementById("about").value = "";
}
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let lastName = document.getElementById("lastName").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let birthMonth = document.getElementById("birthMonth").value;
    let about = document.getElementById("about").value.trim();

    if (!lastName || !firstName || birthMonth === "-- Select Month --" || !about) {
        alert("❌ TRY AGAIN! KUPAL KA BA! ❌");
        return;
    }

    alert("┗━━━━━━⊱ ❗ Submited ❗  ⊰━━━━━━┛");
    location.reload();
});
