

		function myFunction(){
				// Declare variables
				var input, filter,   gallery, search, a, i;
				input = document.getElementById('myInput');
				filter = input.value.toUpperCase();
        gallery = document.getElementsByClassName('gallery');
				search =   gallery.getElementsByClassName('square');
console.log(gallery);

				// Loop through all list items, and hide those who don't match the search query
				for (i = 0; i < search.length; i++) {
    a = search[i].getElementsByTagName("a")[0];
                // a = a[i]
          if (a) {


								if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
								           search[i].style.display = "";
							} else {
								         search[i].style.display = "none";
			 }
	    }
	}
}
