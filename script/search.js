
function myFunction() {

    var input, filter, a, i;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        a = document.getElementsByClassName('square');

    for (i = 0; i < a.length; i++) {
          // a = search[i].getElementsByTagName("a")[0];

        if (a[i].getAttribute('data-title').toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
          a[i].style.display = "none";

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
