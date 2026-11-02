let cartQuantity=0;
function showQuantity()
{
    document.getElementById("quantity").innerText=cartQuantity;
}
function AddToCard()
{
    cartQuantity++;
}
function addTwoItems()
{
    cartQuantity +=2;
}
function addThreeItems()
{
    cartQuantity +=3;
}
function reset()  
{
    cartQuantity=0;
}  