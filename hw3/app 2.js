// Example starter JavaScript for disabling form submissions if there are invalid fields
check();
function check() {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
}
itemPrice = (priceObj) => {
    //console.log(priceObj);
    index = priceObj.selectedIndex;

    quantity = priceObj.options[index].value;
    discountObj = priceObj.parentNode.parentNode.childNodes[3].innerHTML;
    //console.log(discountObj);
    let discount = parseFloat(discountObj) / 100.0;;
    let price = priceObj.parentNode.parentNode.childNodes[7].innerHTML.replace("$", "");

    // console.log("discount", discount);
    // console.log("price", price);
    if (isNaN(discount)) {
        //console.log("found");
        total = '$' + ((quantity * price).toFixed(2));
    }
    else {
        total = '$' + ((quantity * (1 - discount) * price).toFixed(2));
    }

    let totalobj = priceObj.parentNode.parentNode.childNodes[9];
    //console.log(totalobj);
    totalobj.innerHTML = total;

    totalPrice();
}
totalPrice = () => {
    let prices = document.getElementsByClassName("price");
    let sum = 0;
    //console.log(prices);
    for (let i = 0; i < prices.length; i++) {
        num = Number(prices[i].innerHTML.replace("$", ""));
        if (num != NaN) {
            sum += num;
        }
    }
    //console.log(sum.toFixed(2));
    allpriceObj = document.getElementById("allprice").childNodes[0];
    //console.log(allpriceObj);
    allpriceObj.innerHTML = "Total: $" + sum.toFixed(2);
}
deleteItem = (obj) => {
    let item = obj.parentNode.parentNode.parentNode;
    item.innerHTML = "";
    totalPrice();
}
remain = (obj) => {
    let countObj = obj.parentNode.parentNode.parentNode.childNodes[5].childNodes[1];
    //console.log(countObj);
    let index = countObj.selectedIndex;
    let quantity = countObj.options[index].value;
    //console.log(quantity);
    let size = countObj.length;
    let max = countObj.options[size - 1].value;
    //console.log(max);
    let count = (max - quantity);
    //console.log(count);
    let dropdownObj = obj.parentNode.parentNode.parentNode.childNodes[11].childNodes[1].childNodes[3].childNodes[5];
    //console.log(dropdownObj);
    dropdownObj.innerHTML = count;
}
checkLimit = (obj) => {
    if (obj.value > obj.max) {
        obj.value = obj.max;
    }
    if (obj.value.length > obj.maxLength) {
        obj.value = obj.value.slice(0, obj.maxLength);
    }
}
checkCard = (event) => {
    let key = event.keyCode;
    console.log(key);
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
}
alphaOnly = (event) => {
    //console.log(event);
    let key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8 || key == 32);
}

numOnly = (event) => {
    console.log(event);
    let key = event.keyCode;
    return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 8);
}
totalPrice();

