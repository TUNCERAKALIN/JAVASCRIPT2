/* 1)Open a new js file and start by declaring an array that contains 10 strings. 
These strings should be of book titles you have read (or made up) and be lowercase without spaces or 
special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of
 Secrets -> harry_potter_chamber_secrets).*/
 const booksRead=[
     "pride_and_prejudice",
     "animal_farm",
     "the_count_of_monte_cristo",
     "jane_eyre",
     "the_brothers_karamazov",
     "the_three_musketeers",
     "the_little_prince",
     "les_misérables",
     "the_iliad",
     "great_Expectations"
 ];

/* 2)Create a basic html file called index.html and use it to load the js file, confirm the 
console.log show the array. (This is for debugging and making sure everything is in order. Delete 
    // it later when you're done :))*/
// console.log(booksRead);
/* 3)Make a function (or functions) that generate a ul with li elements for each book ID in the 
array using a for loop.*/
// function generateUlAndLi() {
//     const ul = document.createElement('ul');
//     for(i = 0 ; i<booksRead.length ; i++){
//         var li = document.createElement('li');
//         li.innerHTML= booksRead[i];
//         console.log(booksRead[i]);
//         ul.appendChild(li);
    
//     };
//     document.getElementById('BookListReadBefore').appendChild(ul);

// };
// generateUlAndLi();

/* 4)Make an object containing information for each book. Each item (object) in this object should 
have the book ID you thought up in point 1 as a key, and it should have at least the following 
fields: title, language and author.*/
 const infoAboutBooks = {
    pride_and_prejudice:{
        title:"pride and prejudice",
        language:"Davinci",
        author:"tony",
        image: src ="images/1.jpg",
       
    
    },
    animal_farm:{
        title:"animal_farm",
        language:"Davinci1",
        author:"tony",
        image: src ="images/2.jpg",

    },
    the_count_of_monte_cristo:{
        title:"the_count_of_monte_cristo",
        language:"Davinci2",
        author:"tony",
        image: src ="images/3.jpg",

    },
    jane_eyre:{
        title:"jane_eyre",
        language:"Davinci3",
        author:"tony",
        image: src ="images/4.jpg",

    },
    the_brothers_karamazov:{
        title:
        "the_brothers_karamazov",
        language:"Davinci4",
        author:"tony",
        image: src ="images/5.jpg",

    },
    the_three_musketeers:{
        title:"the_three_musketeers",
        language:"Davinci5",
        author:"tony",
        image: src ="images/6.jpg",

    },
    the_little_prince:{
        title:"the_little_prince",
        language:"Davinci6",
        author:"tony",
        image: src ="images/7.jpg",

    },
    les_misérables:{
        title:"les_misérables",
        language:"Davinci7",
        author:"tony",
        image: src ="images/8.jpg",

    },
    the_iliad:{
        title:"the_iliad",
        language:"Davinci8",
        author:"tony",
        image: src ="images/9.jpg",

    },
    great_Expectations:{
        title: "great_Expectations",
        language:"Davinci9",
        author:"tony",
        image: src ="images/10.jpg",

    },
};

/* 5)Now change the function you used to display the book ID's in a list to take the actual 
information about the book from the object and display that. Make sure you choose the right html 
elements for each piece of info, for instance, a heading for the title.*/
// function generateUlAndLi2() {
//     const ul = document.createElement('ul');
//     for(i = 0 ; i<booksRead.length ; i++){
//         var li = document.createElement('li');
//         var header = document.createElement('h3');
//         var language = document.createElement('h3');
//         var author = document.createElement('h3');
       
//         li.id = booksRead[i];
//         header.innerHTML=infoAboutBooks[booksRead[i]].title;
//         language.innerHTML=infoAboutBooks[booksRead[i]].language;
//         author.innerHTML=infoAboutBooks[booksRead[i]].author;
       
//         li.appendChild(header);
//         li.appendChild(language);
//         li.appendChild(author);
       
//         ul.appendChild(li);

    
//     };
//     document.getElementById('BookListReadBefore').appendChild(ul);

// };
// generateUlAndLi2();
/* 6)Beautify your html page with css, add sources and alts to each of the images.*/
//YES I DID SOMETHING
/* 7)Download book covers for each book, construct a new Object which has as keys the bookId's 
again, and as value the path to the image source (e.g.
     {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries 
     (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which 
     places an image at the corresponding li element. Remember that Objects are not ordered, so you cannot 
     guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by 
        modifying the function you made before)*/
        function generateUlAndLi3() {
            const ul = document.createElement('ul');
            for(i = 0 ; i<booksRead.length ; i++){
                var li = document.createElement('li');
                var header = document.createElement('h4');
                var language = document.createElement('h4');
                var author = document.createElement('h4');
                var image = document.createElement('img');
                li.id = booksRead[i];
                header.innerHTML=infoAboutBooks[booksRead[i]].title;
                language.innerHTML=infoAboutBooks[booksRead[i]].language;
                author.innerHTML=infoAboutBooks[booksRead[i]].author;
                image.src=infoAboutBooks[booksRead[i]].image;
                li.appendChild(header);
                li.appendChild(language);
                li.appendChild(author);
                li.appendChild(image);
                ul.appendChild(li);
        
            
            };
            document.getElementById('BookListReadBefore').appendChild(ul);
        
        };
        generateUlAndLi3();
        // I COULDNT ADD iMAGES. i HOPE yOU CAN HELP ME.