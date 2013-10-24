justPopup
===========
A justPopup jQuery Plugin

How to use:
-------------------------

1. Include necessary JS files

	```
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="js/jquery.justPopup.min.js"></script>
  	```

2. Add justPopup CSS file. Please tweak it to serve your needs.

	```
	<link rel="stylesheet" href="css/style.css" />
	```

3. Create the following HTML element

	```
	<div id="display">
		Just Popup
	</div>
	<div class="overlay">
		<div class="inner">
			<div class="content">
				Modal box
			</div>
			<span class="close"></span>
		</div>
		<div class="transparency"></div>
	</div>
	```

4. Fire plugin using jQuery selector

	```
	$(function() {
		$("#display").justPopup();
	});
	```

5. Config plugin with parameters

    ```
    $(function() {
        $("#display").justPopup({
                "color" : "#FFFFFF",
                "background-color" : "#7EB5D6",
                "width" : "500",
                "height" : "300",
                "overlayClose" : true,
                "overlayOpacity" : 0.6
            });
    });    
    ```
    
6. Have fun:-)


Compatibility:
-------------------------

* IE7 and above, Firefox, Chrome, Safari and Opera
	
Live Demo:
-------------------------

* [Homepage](http://www.geniuscarrier.com)
* [Demo](http://www.geniuscarrier.com/demo/justPopup/)

License:
-------------------------
Released under the [MIT license](http://opensource.org/licenses/MIT).
