// var $form = $("#ajax-form");

// var onSuccess = function(data, status) {
//   //Input: data, status 
//   //Output: appends a new item to the list of ingredients 

//   console.log('sucess'); 

//   //create list of html to add new row 
//   var stringToAppend = "<li id =" + data.id + ">" + data[data.length-1].name + ", " + data[data.length-1].price + "<button type = 'button' class = 'editButton' value = 'EDIT'> Edit This Ingredient</button> <button type = 'button' class = 'outOfStock' value = 'OUTOFSTOCK'> Out Of Stock</button></li>"
//   $('#ingredientsList').append(stringToAppend); 
// };

// var onError = function(data, status) {
//   //Input: data, status 
//   //Output: logs if error 
//   console.log("status", status);
//   console.log("error", data);
// };

// $form.submit(function(event) {
//   //prevents the default template in handlebar 
//   event.preventDefault();

//   //finds the name and price from the input text boxes on top 
//   var name = $form.find("[name='name']").val();
//   var price = $form.find("[name='price']").val();

//   //sends post request from client to server, calls done callback or error callback after complete 
//   $.post("ingredients/add", {
//     name: name,
//     price: price, 
//     outOfStock: false
//   })
//     .done(onSuccess)
//     .error(onError);
// });

// $('#ingredientsList').on("click", '.editButton', function(event){
//   //Input: event object 
//   //Output: 

//   //finds the ingredient tag
//   //collects information about text inside the ingredient like id and original information and updated information  
//   var ingredientTag = $(this).closest('li')[0];
//   var allInnerText = ingredientTag.innerText.split(',');
 
//   var originalIngredientName = allInnerText[0];  
//   var originalIngredientPrice = allInnerText[1].split('Edit')[0]; 
//   var id = ingredientTag.id; 

//   //asks the user to input new name and new price
//   var updatedName = prompt('Edit Name of Ingredient', $.trim(originalIngredientName)); 
//   var updatedPrice = prompt('Edit Ingredient Price', $.trim(originalIngredientPrice)); 

//   //sends post request to server with the necessary information to find the object and the information to update the object with 
//   $.post("/ingredients/edit", {
//     id: id, 
//     originalName: originalIngredientName, 
//     originalPrice: originalIngredientPrice, 
//     updatedName: updatedName,
//     updatedPrice: updatedPrice,
//     outOfStock: false
//   })
//   .done(function(data, status){ 
//     //Input: data, status 
//     //Output: manipulates handlebars templete to update listed item 
//     $('li#'+ data._id).html(data.name + "," + data.price + " <button type = 'button' class = 'editButton' value = 'EDIT'> Edit This Ingredient</button>  <button type = 'button' class = 'outOfStock' value = 'OUTOFSTOCK'> Out Of Stock</button>"); 
//   })
//   .error(function(err){
//     //Input: error object 
//     //Output: logs object if there is an error 
//     if(err){ 
//       console.log("There has been an error editing the ingredient", err); 
//     }
//   })
// }); 

// $('#ingredientsList').on("click", '.outOfStock', function(event){
//   //Input: on click event object 
//   //Output: calls done() or error() callbacks when completed 

//   //finds li id tag 
//   var ingredientTag = $(this).closest('li')[0];
//   var id = ingredientTag.id;
//   console.log("id", id); 

//   //sends post request to server side with the id and updated out of stock boolean 
//   $.post("/ingredient/outOfStock", { 
//     id: id, 
//     outOfStock: true
//   })
//   .done(function(updatedObject, status){
//     //Input: updated object and status
//     //Output: removed updated object from handlebars template 

//     $('li#'+ updatedObject._id).remove(); 

//   })
//   .error(function(err){
//     //Input: error object 
//     //Output: logs object if there is an error 
//     if(err){ 
//       console.log("There has been an error editing the ingredient", err); 
//     }    
//   }); 
// }); 

// $("input[type=checkbox]").on( "click", function(data){ 
//   //Input: checkbox data
//   //Output: --, updates text in handlebars to reflect new price

//   //finds current price and price of selected ingredient 
//   var currentPrice = $('h1#totalPrice span:last')[0].innerText;  

//   var priceOfIngredient = this.value; 

//   var updatedPrice; 

//   //if a checkbox becomes checked on, then we will add the ingredient price to the current price 
//   if($(this).is(':checked')){
//     updatedPrice = parseFloat(currentPrice) + parseFloat(priceOfIngredient); 
//   }
//   //if a checkbox becomes checked off, then we will subtract the ingredient price from the current price
//   else{ 
//     updatedPrice = parseFloat(currentPrice) - parseFloat(priceOfIngredient); 
//   }

//   //updating current price in handlebars
//   $('h1#totalPrice span:last')[0].innerText = updatedPrice.toFixed(2); 

// });

// $('#submitButton').on("click", '.submit', function(event){
//   //Input: on click event object 
//   //Output: makes a call to the done callback which displays a congrats alert

//   event.preventDefault();

//   //gets name on the order and price of all the ingredients 
//   var name = $("[name='name']").val();
//   var price = $('h1#totalPrice span:last')[0].innerText; 
//   var idsOfCheckedIngredients = [];

//   //find all inrgedients that are checked 
//   $("input[type=checkbox]:checked").each(function(checkbox){ 
//     idsOfCheckedIngredients.push(this.id); 
//   })

//   //send a post request to server with the parameters name on the order, total price, completed boolean false, and all the ingredients 
//   $.post('order/addOrderPOST', {
//     name: name, 
//     price: price, 
//     completed: false, 
//     ingredients: idsOfCheckedIngredients
//   })
//     .done(function(status){ 
//       //Input: completion status 
//       //Output: Congratulatory alert 
//       alert("Congratulations you have placed an order!")
//     })
//     .error(function(status){ 
//       //Input: error status 
//       //Output: log error 
//       console.log("There has been an error", status); 
//     });
// });

// $("#pendingOrders").on("click", ".completed", function(event){ 
//   //Input: on click event object 
//   //Output: --, makes call to sucess callback function that removes the order from the pending orders list 

//   //finds the order tag 
//   var orderTag = $(this).closest('li')[0];
//   var id = orderTag.id;

//   //sends post request to the server with the id of the order and completed boolean true 
//   $.post('/kitchen/completed', { 
//     id: id, 
//     completed: true
//   })
//   .done(function(updatedOrder, status){
//     //Input: updated order object, completion status 
//     //Output: removes order from pending orders list 

//     $('li#'+ updatedOrder._id).remove()
//   })
//   .error(function(err){ 
//     //Input: error object 
//     //Output: logs object if there is an error 
    
//     console.log("There has been an error", err); 
//   }); 

// })