function connect(){

    var searchTerm = document.getElementById("container").value ; 
   
    var url = `https://www.themealdb.com/api/json/v1/1/categories.php?s=${searchTerm}` ;
    console.log (url);
   
    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
   
   }
   
   function display (data){
   
     var allMeals = data.categories ;
     console.log(allMeals);
   
     var oldContent = document.getElementById("first");
     oldContent.innerHTML = ""; 
   
     for (var i=0; i<5; i++){
   
       var newDiv = document.createElement("div");
       newDiv.innerHTML = `Meal Catagory: ${allMeals[i].strCategory}  <br>
                           Meal ID: ${allMeals[i].idCategory}<br>
                           <img src="${allMeals[i].strCategoryThumb}"> <br> <br>
                           Meal Description: <p>
                           ${allMeals[i].strCategoryDescription}  </p> <br>
                           ` 
     
   
        newDiv.classList.add("mealStyle");
        oldContent.appendChild(newDiv);
     }
   
   }