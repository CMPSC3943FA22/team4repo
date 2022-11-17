$(function(){
    let shoppingList = [];
    let products = [
        {
            "name" : "Apples",
            "dept" : "Produce",
            "price" : 1.25,
            "qty" : "In Stock",
            "img" : "imgs/apple.jpg",
            "trending" : "true"
        },
        {
            "name" : "Bananas",
            "dept" : "Produce",
            "price" : 0.69,
            "qty" : "In Stock",
            "img" : "imgs/banana.jpg",
            "trending" : "false"
        },
        {
            "name" : "Carrots",
            "dept" : "Produce",
            "price" : 1.55,
            "qty" : "In Stock",
            "img" : "imgs/carrots.jpg",
            "trending" : "true"
        },
        {
            "name" : "Broccoli",
            "dept" : "Produce",
            "price" : 4.99,
            "qty" : "In Stock",
            "img" : "imgs/broc.jpg",
            "trending" : "false"
        },
        {
            "name" : "Hiland Whole Milk",
            "dept" : "Dairy",
            "price" : 4.25,
            "qty" : 30,
            "img" : "imgs/milk.jpg",
            "trending" : "false"
        },
        {
            "name" : "Hiland 2% Milk",
            "dept" : "Dairy",
            "price" : 4.25,
            "qty" : 20,
            "img" : "imgs/2milk.jpg",
            "trending" : "false"
        },
        {
            "name" : "Nesquik Chocolate Milk - Single Serving",
            "dept" : "Dairy",
            "price" : 1.55,
            "qty" : 20,
            "img" : "imgs/nes.jpg",
            "trending" : "false"
        },
        {
            "name" : "Farm Fresh Eggs",
            "dept" : "Dairy",
            "price" : 3.25,
            "qty" : 20,
            "img" : "imgs/eggs.jpg",
            "trending" : "false"
        },
        {
            "name" : "Digiorno Frozen Pizza",
            "dept" : "Frozen",
            "price" : 6.99,
            "qty" : 20,
            "img" : "imgs/dig.jpg",
            "trending" : "false"
        },
        {
            "name" : "Ben and Jerry's Ice Cream",
            "dept" : "Frozen",
            "price" : 5.25,
            "qty" : 20,
            "img" : "imgs/ben.jpg",
            "trending" : "false"
        },
        {
            "name" : "Gordon's Fish Fillets",
            "dept" : "Frozen",
            "price" : 4.25,
            "qty" : 20,
            "img" : "imgs/gordons.jpg",
            "trending" : "false"
        },
        {
            "name" : "Bird's Eye Frozen Broccoli",
            "dept" : "Frozen",
            "price" : 2.15,
            "qty" : 20,
            "img" : "imgs/frozbroc.jpg",
            "trending" : "false"
        },
        {
            "name" : "Sweet Baby Ray's Barbecue Sauce - BBQ",
            "dept" : "Dry Goods",
            "price" : 3.25,
            "qty" : 20,
            "img" : "imgs/bbq.jpg",
            "trending" : "true"
        },
        {
            "name" : "Ranch Style Canned Beans",
            "dept" : "Dry Goods",
            "price" : 1.25,
            "qty" : 20,
            "img" : "imgs/ranch.jpg",
            "trending" : "false"
        },
        {
            "name" : "Hidden Valley Ranch",
            "dept" : "Dry Goods",
            "price" : 3.75,
            "qty" : 20,
            "img" : "imgs/hvranch.jpg",
            "trending" : "false"
        },
        {
            "name" : "Prego Spaghetti Sauce",
            "dept" : "Dry Goods",
            "price" : 4.25,
            "qty" : 20,
            "img" : "imgs/prego.jpg",
            "trending" : "false"
        },
        {
            "name" : "Mahatma Grain Rice",
            "dept" : "Dry Goods",
            "price" : 2.85,
            "qty" : 20,
            "img" : "imgs/rice.jpg",
            "trending" : "false"
        },
        {
            "name" : "Barilla Spaghetti Noodles",
            "dept" : "Dry Goods",
            "price" : 1.75,
            "qty" : 20,
            "img" : "imgs/spa.jpg",
            "trending" : "true"
        },
        {
            "name" : "Dawn Dish Soap",
            "dept" : "Home Goods",
            "price" : 3.65,
            "qty" : 20,
            "img" : "imgs/dawn.jpg",
            "trending" : "false"
        },
        {
            "name" : "Charmin Extra Soft Toilet Paper",
            "dept" : "Home Goods",
            "price" : 4.75,
            "qty" : 20,
            "img" : "imgs/charmin.jpg",
            "trending" : "false"
        },
        {
            "name" : "Snuggle Dryer Sheets",
            "dept" : "Home Goods",
            "price" : 4.00,
            "qty" : 20,
            "img" : "imgs/snug.jpg",
            "trending" : "false"
        },
        {
            "name" : "Tide Pods",
            "dept" : "Home Goods",
            "price" : 4.99,
            "qty" : 20,
            "img" : "imgs/tide.jpg",
            "trending" : "false"
        },
        {
            "name" : "Lean Ground Beef",
            "dept" : "Meat",
            "price" : 3.00,
            "qty" : "In Stock",
            "img" : "imgs/ground.jpg",
            "trending" : "true"
        },
        {
            "name" : "Ham",
            "dept" : "Meat",
            "price" : 4.00,
            "qty" : "In Stock",
            "img" : "imgs/ham.jpg",
            "trending" : "true"
        },
        {
            "name" : "Turkey",
            "dept" : "Meat",
            "price" : 6.00,
            "qty" : "In Stock",
            "img" : "imgs/turkey.jpg",
            "trending" : "true"
        },
        {
            "name" : "Pork Chop",
            "dept" : "Meat",
            "price" : 4.25,
            "qty" : "In Stock",
            "img" : "imgs/porkchop.jpg",
            "trending" : "false"
        }
    ];
    
    let quotes = [
        {
            "quote": "I love spending my time at Rusty's!",
            "name": "Diana King"
        },
        {
            "quote": "I can get in and out, no problem!",
            "name": "John Smith"
        }
    ]
    //Adds a thank you when submitting form on contact page
    $("#commentSubmit").on('click', function(){
        let customer = $("#name").val();
        $("#thanks").html("<h2>Thank you "+customer+" for your feedback</h2>")
    })
   
    // --- Product Search Functionality
    $("#sub").on("click", function(){
        $("#result").empty();
        let search = $("#search").val();
        //had to add a variable for the addList ID to allow the click events to register and record value properly
        //to format in css #prodInfo button {}
        let j =0;
        for(let i in products){
            
            let d = $("#dep").val();
        
            if(products[i].name.toLowerCase().includes(search.toLowerCase()) && products[i].dept == d){
                //search bar and dept selected
                $("#result").append(
                    "<div id='prodDisp'>" +
                    "<img src='" + products[i].img + "' id='prodImg'>" + 
                        '<div id=prodInfo">' +
                            "<h4 id='prodName'>" + products[i].name + "</h4>" +
                            "<p id='prodDept'>&emsp;Dept: " +products[i].dept + "</p>" +
                            "<p id='prodPric'>&emsp;Price: " + products[i].price + "</p>" +
                            "<p id='prodQty'>&emsp;Qty in Stock: " + products[i].qty + "</p>" +
                            "<button id='addList"+j+"' value='' ><img id='addListImg' src='/imgs/plus.png'></button>" +
                        "</div>" +
                    "</div>"
                   
                    );
                    
                    //adds button that pushes that item to shopping list
                $('#addList' + j).on('click', event => {
                    let n = products[i].name;
                    shoppingList.push(n);
                    
                    
                })
                
                    
            } else if(products[i].name.toLowerCase().includes(search.toLowerCase()) && d == ""){
                //search bar and dept can be blank-will show everything in obj
                $("#result").append(
                    "<div id='prodDisp'>" +
                    "<img src='" + products[i].img + "' id='prodImg'>" + 
                        '<div id=prodInfo">' +
                        "<h4 id='prodName'>" + products[i].name + "</h4>" +
                            "<p id='prodDept'>&emsp;Dept: " +products[i].dept + "</p>" +
                            "<p id='prodPric'>&emsp;Price: $" + products[i].price + "</p>" +
                            "<p id='prodQty'>&emsp;Qty in Stock: " + products[i].qty + "</p>" +
                            "<button id='addList"+j+"' value='' ><img src='/imgs/plus.png'></button>" +
                        "</div>" +
                    "</div>"
                    );
                    //adds button that pushes that item to shopping list
                $('#addList' + j).on('click', event => {
                    let n = products[i].name;
                    shoppingList.push(n);
                    
                    
                })
            }
            j++;
        }
        if($("#result").length == 0){
            $("#resultList").append(
                "<p style='color:red'>No matching items</p>"
            )
         }
        
        
    })
  


    //--- Show shopping list array
    $("#showList").on("click",function(){
        $("#shopList").empty();
        for(let i of shoppingList){
            console.log(i);
            $('#shopList').append(
                "<li>" + i +"</li>"
            )
        }
    })

    
    // --- Home Page ---

    // --- Adds items to "Featured Items" and "All Items" fields on the home page.
    $(function addHomeScreenItems(){
        $("#trendingitemslist").empty();
        $("#itemslist").empty();
        let j = 0;
        let noOfTrendingItems = 0;
        for(let i in products){
            if (products[i].qty != 0) {
                $("#itemslist").append(
                    "<div id='prodDisp'>" +
                        "<div id='picWrap'>" +
                            "<img id='prodImg' src='" + products[i].img + "'>" + 
                        "</div>" +
                        '<div id=prodInfo">' +
                            "<p id='prodName'>" + products[i].name + "</p>" +
                            "<p id='prodDept'>" +products[i].dept + "</p>" +
                            "<p id='prodPric'>$" + products[i].price + "</p>" +
                            "<button id='addList"+j+"' value='' ><i class='fa fa-cart-plus'></i></button>" +
                        "</div>" +
                    "</div>"
                    );

                    // Adds items to trending items list - no more than 6
                    if (products[i].trending == "true" && noOfTrendingItems != 6) {
                        $("#trendingitemslist").append(
                            "<div id='prodDisp'>" +
                                "<div id='picWrap'>" +
                                    "<img id='prodImg' src='" + products[i].img + "'>" + 
                                "</div>" +
                                '<div id=prodInfo">' +
                                    "<p id='prodName'>" + products[i].name + "</p>" +
                                    "<p id='prodDept'>" +products[i].dept + "</p>" +
                                    "<p id='prodPric'>$" + products[i].price + "</p>" +
                                    "<button id='addList"+j+"' value='' ><i class='fa fa-cart-plus'></i></button>" +
                                "</div>" +
                            "</div>"
                            );
                            noOfTrendingItems++;
                    }
                    //adds button that pushes that item to shopping list
                $('#addList' + j).on('click', event => {
                    let n = products[i].name;
                    shoppingList.push(n); 
                })
            }
        }
        j++;
    });
    
})
