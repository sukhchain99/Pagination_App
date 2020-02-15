var sorted, ordered;

function sortData() {
    sorted = document.getElementById("sort").value;
    console.log(sorted);
    return sorted;
}

function orderData() {
    ordered = document.getElementById("order").value;
    console.log(ordered);
    return ordered;
}

function alertData() {
    sortData();
    orderData();
    alert(sorted + ' ' + ordered);
}

function updateChanges() {
    sortData();
    orderData();
    forms = document.getElementsByTagName('form');
    var url = forms[0].action;
    forms[0].action = url+"&sort="+sorted+"&order="+ordered;
}

alertData();