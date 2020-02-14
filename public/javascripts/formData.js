var sorted, ordered;

function sortData() {
    sorted = document.getElementById("sort").value;

    return sorted;
}

function orderData() {
    ordered = document.getElementById("order").value;

    return ordered;
}

function alertData() {
    sortData();
    orderData();
    alert(sorted + ' ' + ordered);
}

alertData();