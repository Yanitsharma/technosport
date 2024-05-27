const items=[
  {
    image:"B117 Light Grey_1.webp",
    Product_name:"Technosport Boys grey running sport T-shirt",
    current_price:323,
    original_price:329,
    discount:4,
    gender:"Boys",
    color:"Red",
    size:30
  },
  {
    
      image:"B121 WHITE_1.webp",
      Product_name:"Technosport Boys Active Round  Neck T-shirt",
      current_price:304,
      original_price:320,
      discount:5,
      gender:"Male",
      color:"Black",
      size:30
  },
  {
    
    image:"B127 blue teal_1.webp",
    Product_name:"Technosport Boys Active Crew  Neck T-shirt",
    current_price:266,
    original_price:279,
    discount:4,
    gender:"Male",
    color:"Red",
    size:32,
  
},
{
    
  image:"BR25 Beetle_1.webp",
  Product_name:"Technosport Boys Active Running TrackPant",
  current_price:519,
  original_price:519,
  discount:0,
  gender:"Male",
  color:"Blue",
  size:32,

},
{
  image:"B114LTN_1.webp",
  Product_name:"Technosport Boys Active shorts",
  current_price:380,
  original_price:399,
  discount:4,
  gender:"Boys",
  color:"Brown",
  size:36,

},
{
  image:"B123 LIGHT NAVY_1.webp",
  Product_name:"Technosport Boys Active Crew T-Shirt",
  current_price:299,
  original_price:299,
  discount:0,
  gender:"Boys",
  color:"Blue",
  size:34,
}









]
let gender;
let color;
let size;
let g;
let c;
let s;
// displayItems("Male","Black",30);
function displayItems(gender,color,size){
 
  let containerElement=document.querySelector('.container')
  let newHTML='';
  items.forEach(item=>{
    if(gender&&gender==item.gender||gender==null){
    if(color&&color==item.color||color==null){
    if(size&&size==item.size|| size==null){
    newHTML+=`<div class="items">
    <div class="box1"><img class="img" src="${item.image}"></div>
    <div class="Product_name">${item.Product_name}</div>
    <div class="price">
      <span class="current_price">₹ ${item.current_price}</span>
      <span class="original_price">₹ ${item.original_price}</span>
      <span class="discount">(${item.discount}% off)</span>
    </div>
  </div>
  `}}}
    })
  containerElement.innerHTML=newHTML;
}





function displayIcon(){
  let Element=document.querySelector('.element')
  Element.innerHTML=`
  
  <span>GENDER</span>
  <span class="A"><button onclick="notDisplay()" class="b"><span class="material-symbols-outlined">
stat_1
</span></button></span>
`
let empty=document.querySelector('.empty')
empty.innerHTML=`<form class="Y">
<input type="radio" onclick="gen('Male')"id="html" name="fav_language" value="Male">
<label for="html">Male</label><br>
<input type="radio" onclick="gen('Boys')"id="css" name="fav_language" value="Boys">
<label for="css">Boys</label><br>

</form>
<div class="but"><button onclick="displayIcon();
gen()"><span class="material-symbols-outlined BUT">
delete
</span></button></div>
    `
}
function displayIIcon(){
  let Element=document.querySelector('.color')
  Element.innerHTML=`

  <span>COLOR</span>
  <span class="A"><button onclick="notDisplay2()" class="b"><span class="material-symbols-outlined">
stat_1
</span></button></span>
`
let empty=document.querySelector('.empty1')
empty.innerHTML=`
<form class="Y">
<input type="radio" onclick="col('Black')"id="html" name="fav_language" value="Black">
<label for="html">Black</label><br>
<input type="radio" onclick="col('Blue')"id="css" name="fav_language" value="Blue">
<label for="css">Blue</label><br>
<input type="radio" onclick="col('Brown')"id="html" name="fav_language" value="Brown">
<label for="html">Brown</label><br>
<input type="radio" onclick="col('Red')"id="css" name="fav_language" value="Red">
<label for="css">Red</label><br>

</form>
<div class="but"><button onclick="displayIIcon();
col()"><span class="material-symbols-outlined BUT">
delete
</span></button></div>
    `
    

}
function displayIIIcon(){
  let Element=document.querySelector('.size')
  Element.innerHTML=`

  <span>SIZE</span>
  <span class="A"><button onclick="notDisplay3()" class="b"><span class="material-symbols-outlined">
stat_1
</span></button></span>
`
let empty=document.querySelector('.empty2')
empty.innerHTML=`<form class="Y">
<input type="radio" onclick="st(30)" id="html" name="fav_language" value="30">
<label for="html">30</label><br>
<input type="radio" onclick="st(32)"id="css" name="fav_language" value="32">
<label for="css">32</label><br>
<input type="radio" onclick="st(34)"id="html" name="fav_language" value="34">
<label for="html">34</label><br>
<input type="radio" onclick="st(36)"id="css" name="fav_language" value="36">
<label for="css">36</label><br>
</form>
<div class="but"><button onclick="displayIIIcon();
st()"><span class="material-symbols-outlined BUT">
delete
</span></button></div>
    `
    

}

function notDisplay(){
  let Element=document.querySelector('.element')
  Element.innerHTML=`
 
  <span>GENDER</span>
  <span class="A"><button onclick="displayIcon()"class="b"><span class="material-symbols-outlined">
  stat_minus_1
  </span></button></span>`
  let empty=document.querySelector('.empty')
empty.innerHTML=``
}
function notDisplay2(){
  let Element=document.querySelector('.color')
  Element.innerHTML=`
 
  <span>COLOR</span>
  <span class="A"><button onclick="displayIIcon()" class="b"><span class="material-symbols-outlined">
  stat_minus_1
  </span></button></span>`
  let empty=document.querySelector('.empty1')
empty.innerHTML=``
}
function notDisplay3(){
  let Element=document.querySelector('.size')
  Element.innerHTML=`
 
  <span>SIZE</span>
  <span class="A"><button onclick="displayIIIcon()" class="b"><span class="material-symbols-outlined">
  stat_minus_1
  </span></button></span>`
  let empty=document.querySelector('.empty2')
empty.innerHTML=``
}
function gen(gender){
   g=gender;
}
function col(color){
  c=color;
}
function st(size){
 
 s=size;

}
