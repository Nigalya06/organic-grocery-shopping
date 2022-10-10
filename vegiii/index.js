var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function order() {
    let a = document.querySelector('select').value;
    let b = document.querySelector('#quantity').value;
    let c = document.getElementById('fir').value;
    let d = document.getElementById('las').value;
    let e = document.getElementById('mob').value;
    let f = document.getElementById('email').value;
    let g = document.getElementById('loc').value;
    let h = document.getElementById('city').value;



    if (b == 0 || c == ''||d==''||e==''||f==''||g==''||h=='') 
    {
        alert("Pleace fill the all required details");
    }
    else {

        if (a == "cabbage") {
            alert("Your Order is Done Bill amount is " + b * 60);
        }
        else if (a == "Beans") {
            alert("Your Order is Done Bill amount is " + b * 30);
        }
        else if (a == "Beetroot") {
            alert("Your Order is Done Bill amount is " + b * 40);
        }
        else if (a == "Brinjal") {
            alert("Your Order is Done Bill amount is " + b * 12);
        }
        else if (a == "onion") {
            alert("Your Order is Done Bill amount is " + b * 50);
        }
        else if (a == "Capscicum") {
            alert("Your Order is Done Bill amount is " + b * 40);
        }
        else if (a == "Carrot") {
            alert("Your Order is Done Bill amount is " + b * 60);
        }
        else if (a == "Cauliflower") {
            alert("Your Order is Done Bill amount is " + b * 25);
        }
        else if (a == "Tomoto") {
            alert("Your Order is Done Bill amount is " + b * 20);
        }
        else {
            alert("Your Order is Done Bill amount is " + b * 30);
        }
    }

}

function fun2()
{
    let i=document.getElementById('fname').value;
    let j=document.getElementById('lname').value;
    let k=document.getElementById('email').value;
    let l=document.getElementById('feed').value;
    if(i==null||j==null||k==null||l==null)
    {
        alert("Pleace fill the all required details");
    }
    else{
        alert("Feedback sent successfully");
    }
}