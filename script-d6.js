let sandwiches = [{
    "sandwich": "hamburger",
    "calories": "260"
  }]

 var fries = [{
     "fries_size" :  "Large French Fries",
     "calories" : "560"
 }] 


//  let fastfood = {
//     "sandwiches": [{
//         "sandwich": "hamburger",
//         "calories": "260"
//     }],
//     "fries": [{
//         "fries_size": "Large French Fries",
//         "calories": "560"
//     }]
// }


 document.write("My favorite sandwich is a " + sandwiches[0].sandwich + " which has approx. " + 
                sandwiches[0].calories + "calories, along with it I enjoy eating " + 
                fries[0].fries_size + " which have about " + fries[0].calories + " calories.");

