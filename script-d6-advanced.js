var books = JSON.parse(booklist);

console.log(books.length);

var txt = "";

for (let i=0; i<books.length; i++){
    document.getElementById("books").innerHTML += "<p>" + books[i].title + " " + books[i].author  + " "
                                                + books[i].read  + "</p>" +
                                                "<img src=" + books[i].image + " alt="+ books[i].title + " width = 10%>";
    if (books[i].read == true){
        document.getElementsByTagName("p")[i].style.backgroundColor= "darkgreen";
    }else{
        document.getElementsByTagName("p")[i].style.backgroundColor= "darkred";
    }
}