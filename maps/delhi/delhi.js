const items = [
    "Samosa (2 pcs)",
    "Kachori",
    "Masala papdi",
    "Dahi kachori",
    "Dahi samosa",
    "Dahi papdi",
    "Pani puri (10p)",
    "Masala puri (5p)",
    "Dahi puri (5p)",
    "Bhel puri",
    "Samosa cutlet",
    "Paneer Cutlet",
    "Kachori Cutlet",
    "Mushroom Cutlet",
    "Pav bhaji (3p)",
    "Cheese pav bhaji",
    "Paneer pav bhaji",
    "Tawa masala pav",
    "Vada pav",
    "Extra pav (1p)",
    "Corn Chaat",
    "Veg noodles",
    "Schezwan noodles",
    "Chilli garlic noodles",
    "Mushroom noodles",
    "Baby corn noodles",
    "Paneer noodles",
    "Gobi noodles",
    "Mushroom manchurian",
    "Mushroom chilli",
    "Paneer manchurian",
    "Paneer chilli",
    "Gobi manchuria",
    "Gobi chilli",
    "Baby corn Manchurian",
    "Baby corn chilli"
    , "Veg fried rice",
    "Schezwan fried rice",
    "Chilligarlic fried rice",
    "Jeera rice",
    "Mushroom fried rice",
    "Baby Corn Fried Rice",
    "Paneer fried rice",
    "Kaju fried rice",
    "Gobi fried rice",
    "Tawa pav",
    "Curd rice"
    , "Veg sandwich",
    "Samosa grilled sandwich",
    "Cheese club sandwich",
    "Chocolate grill sandwich",
    "Paneer tikka sandwich",
    "Paneer tikka cheese sandwich"
    , "Veg frankie",
    "Veg schezwan masala frankie",
    "Paneer tikka frankie",
    "Paneer egg frankie",
    "Egg sandwich",
    "Egg burma toast",
    "Chicken burma toast",
    "Chicken tikka sandwich",
    "Chicken schezwan sandwich",
    "Egg cheese sandwich",
    "Chicken cheese sandwich",
    "Egg burju",
    "Chicken Lollipop",
    "Chicken Chilli",
    "Chicken noodles",
    "Chicken schezwan noodles",
    "Egg schezwan noodles",
    "Egg Gobi noodles",
    "Egg fried rice",
    "Egg masala rice",
    "Egg gobi Rice",
    "Egg schezwan masala frankie",
    "Chicken tikka frankie",
    "Chicken schezwan masala frankie",
    "Egg burj pav",
    "Schezwan omlet pav",
    "Egg frankie",
    "Double omlet",
    "Triple omlet",
    "Oreo milkshake",
    "Kitkat milkshake",
    "Strawberry milkshake",
    "Cold coffee",
    "Mango milkshake",
    "Pineapple milkshake"
];
const price=[25,
    25,
    25,
    30,
    30, 30, 30, 30, 30, 30, 30, 50, 30, 50, 50, 60, 70, 70, 30, 10, 50, 45, 50, 55, 55, 55, 60, 60, 70, 70, 80, 80, 70, 70, 70, 70, 45, 50, 55, 50, 55, 55, 65, 65, 65, 65, 40,
    50, 60, 60, 60, 70, 80, 45, 50, 65, 70,
    60, 50, 80, 80, 80, 70, 90, 40,
    130, 130, 90, 90,
    60, 70, 60, 70, 80,
    60, 80, 80, 60, 60, 60, 30, 40,
    60,60, 60, 60, 60, 60
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