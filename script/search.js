
     function myFunction() {

    var input, filter, search, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        search = document.getElementsByClassName('gallery');

    for (i = 0; i < search.length; i++) {
          a = search[i].getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            search[i].style.display = "";
        } else {
            search[i].style.display = "none";

        }
    }
}









// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
