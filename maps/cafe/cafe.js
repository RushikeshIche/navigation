const items = [
    "Cardamon Tea (100 ml)",
    "Cardamon Tea (150 ml)",
    "Green Tea",
    "Cappuccino",
    "Machaccino",
    "Low sugar Cappuccino",
    "Filter Cofee",
    "Cold Cofee",
    "Soup",
    "Plain Veggie Noodles",
    "Eggie Noodles",
    "Grilled Sandwich",
    "Cheese Sandwich",
    "Egg Sandwich",
    "Chicken Sandwich",
    "Papu Charu Annam",
    "Curd Rice",
    "Veg Fried Rice",
    "Egg Fried Rice",
    "Puri",
    "Poha",
    "Samosa (2 pcs)",
    
];
const price=[12,15,15,50,60,60,"20/25","40/60",30,25,35,30,40,45,55,50,45,"","",40,30,30
]
for(let i=0;i<items.length;i++){
var html= `<tr class="tr">
                <td>${i+1}</td>
                <td class="item_name">${items[i]}</td>
                <td>${price[i]}</td>
            </tr>`;
   let a =document.getElementById("food")
   a.innerHTML = a.innerHTML + html;
 }

 function arnav() {
    var input, filter, tr, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    tr = document.getElementsByClassName('item_name');
    for (i = 0; i < tr.length; i++) {
      a = tr[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        document.getElementsByClassName("tr")[i].style.display = "";
      } else {
        document.getElementsByClassName("tr")[i].style.display = "none";
      }
    }
  }