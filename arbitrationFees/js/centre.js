function validation() {
    var distance = document.getElementById('distance').value;
    var frais = Number(document.getElementById('frais').value);
    var fraisTotal;

    if (frais >= 2000 && distance < 300) {
        fraisTotal = distance * 2 + frais;
    } else if (frais >= 2000 && distance >= 300) {
        fraisTotal = distance * 2 + 1200 + frais;
    } else if (frais < 2000 && distance < 300) {
        fraisTotal = distance * 2 + frais;
    } else if (frais < 2000 && distance >= 300) {
        fraisTotal = distance * 2 + 500 + frais;
    }
    if (frais > 0 && distance != '')
        alert(fraisTotal + " DH");
}
