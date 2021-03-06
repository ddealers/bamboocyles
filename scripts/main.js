//button Check answers
var demoApp = angular.module('demoApp', ['ngRoute','ngAnimate']);

demoApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',
	{
		controller: 'BicicletasController',
		templateUrl: 'partials/bicicletas.html'
	})
	.when('/view2',
	{
		controller: 'BicicletasController',
		templateUrl: 'partials/View2.html'
	})
	.when('/bicicletas',
	{
		templateUrl: 'partials/bicicletas.html'
	})
	.when('/cuadros',
	{
		templateUrl: 'partials/cuadros.html'
	})
	.when('/contacto',
	{
		templateUrl: 'partials/contacto.html'
	})
	.when('/personaliza',
	{
		templateUrl: 'partials/personaliza.html'
	})
	.when('/talleres',
	{
		templateUrl: 'partials/talleres.html'
	})
	.when('/merchandise',
	{
		templateUrl: 'partials/merchandise.html'
	})
	.when('/open-source',
	{
		templateUrl: 'partials/open-source.html'
	})
	// .when('/personaliza',
	// {
	// 	templateUrl: 'partials/personaliza.html'
	// })
	.otherwise({ redirectTo: '/' });
});

demoApp.controller('HeaderController', function ($scope, $location) { 
	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};

	function close_toggle() {
		if ($(window).width() <= 768) {
			$('.nav a').on('click', function(){
				$(".navbar-toggle").click();
			});
		}
		else {
			$('.nav a').off('click');
		}
	}

	close_toggle();

	$(window).resize(close_toggle);
});

demoApp.controller('BicicletasController', function ($scope) {
	$scope.esconder = false;
	$scope.isCrecer = false;
	$scope.comprado = "Compra ahora!";
	$scope.activo = false;
	$scope.color = true;
	$scope.type = 'racer';
	$scope.selected_index = 0;
	$scope.personaliza = false;
	
	$scope.geom = false;
	$scope.specs = false;
	$scope.dealers = false;

	$scope.show = function(section){
		$scope.hide();
		$scope[section] = true;
	}
	$scope.hide = function(section){
		$scope.geom = false;
		$scope.specs = false;
		$scope.dealers = false;
	}
	$scope.select = function (selection) {

		if($scope.selected_index==0){
			$scope.personaliza = false;
			if(selection == 1) {
				$scope.comprado = "Seleccionaste la cruise";
				$scope.type = "Cruise";
			}
			else if(selection == 2) {
				$scope.comprado = "Seleccionaste la Racer";
				$scope.type = "Racer";
			}
			else if(selection == 3) {
				$scope.comprado = "Seleccionaste la Street";
				$scope.type = "Street";
			}
			$scope.selected_index = selection;
		}
		else {
			$scope.selected_index = 0;
		}
	}

	$scope.isPersonaliza = function () {
		return $scope.personaliza;
	}

	$scope.changePersonaliza = function () {
		$scope.personaliza = !$scope.personaliza;
	}

	$scope.customize_data = [
        {
            name: "Puños",
            image: "puños.png",
            colors: ["red","blue"]
        },
        {
            name: "Llanta delantera",
            image: "puños.png",
            colors: ["red","orange","green"]
        },
        {
            name: "Llanta trasera",
            image: "puños.png",
            colors: ["red","blue"]
        },
        {
            name: "Cadena",
            image: "puños.png",
            colors: ["blue","purple","#55443A"]
        },
        {
            name: "Puños",
            image: "puños.png",
            colors: ["red","blue"]
        },
        {
            name: "Llanta delantera",
            image: "puños.png",
            colors: ["red","orange","green"]
        },
        {
            name: "Llanta trasera",
            image: "puños.png",
            colors: ["red","blue"]
        },
        {
            name: "Cadena",
            image: "puños.png",
            colors: ["blue","purple","#55443A"]
        }
    ];

    $scope.racer_images = [{
	    src: './images/Bicicletas/racer/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Bicicletas/racer/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Bicicletas/racer/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Bicicletas/racer/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Bicicletas/racer/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Bicicletas/racer/img6.jpg',
	    title: 'Pic 6'
	  // }, {
	    // src: './images/Bicicletas/racer/img7.jpg',
	    // title: 'Pic 7'
	  }];

	$scope.cruise_images = [{
	    src: './images/Bicicletas/cruise/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Bicicletas/cruise/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Bicicletas/cruise/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Bicicletas/cruise/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Bicicletas/cruise/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Bicicletas/cruise/img6.jpg',
	    title: 'Pic 6'
	  }, {
	    src: './images/Bicicletas/cruise/img7.jpg',
	    title: 'Pic 7'
	  }, {
	    src: './images/Bicicletas/cruise/img8.jpg',
	    title: 'Pic 8'
	  }];

	$scope.street_images = [{
	    src: './images/Bicicletas/street/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Bicicletas/street/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Bicicletas/street/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Bicicletas/street/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Bicicletas/street/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Bicicletas/street/img6.jpg',
	    title: 'Pic 6'
	  }, {
	    src: './images/Bicicletas/street/img7.jpg',
	    title: 'Pic 7'
	  }];

	  $scope.racer_thumbs = [{
	    src: './images/Bicicletas/racer/thumbs/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Bicicletas/racer/thumbs/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Bicicletas/racer/thumbs/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Bicicletas/racer/thumbs/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Bicicletas/racer/thumbs/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Bicicletas/racer/thumbs/img6.jpg',
	    title: 'Pic 6'
	  // }, {
	    // src: './images/Bicicletas/racer/img7.jpg',
	    // title: 'Pic 7'
	  }];

	$scope.cruise_thumbs = [{
	    src: './images/Bicicletas/cruise/thumbs/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Bicicletas/cruise/thumbs/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Bicicletas/cruise/thumbs/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Bicicletas/cruise/thumbs/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Bicicletas/cruise/thumbs/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Bicicletas/cruise/thumbs/img6.jpg',
	    title: 'Pic 6'
	  }, {
	    src: './images/Bicicletas/cruise/thumbs/img7.jpg',
	    title: 'Pic 7'
	  }, {
	    src: './images/Bicicletas/cruise/thumbs/img8.jpg',
	    title: 'Pic 8'
	  }];

	$scope.street_thumbs = [{
	    src: './images/Bicicletas/street/thumbs/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Bicicletas/street/thumbs/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Bicicletas/street/thumbs/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Bicicletas/street/thumbs/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Bicicletas/street/thumbs/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Bicicletas/street/thumbs/img6.jpg',
	    title: 'Pic 6'
	  }, {
	    src: './images/Bicicletas/street/thumbs/img7.jpg',
	    title: 'Pic 7'
	  }];
});

demoApp.controller('CuadrosController', function ($scope) {
	$scope.activo = false;
	$scope.color = true;
	$scope.type = 'racer';
	$scope.selected_index = 0;
	$scope.personaliza = false;
	

	$scope.select = function (selection) {

		if($scope.selected_index==0){
			$scope.personaliza = false;
			if(selection == 1) {
				$scope.comprado = "Seleccionaste la cruise";
				$scope.type = "Cruise";
			}
			else if(selection == 2) {
				$scope.comprado = "Seleccionaste la Racer";
				$scope.type = "Racer";
			}
			else if(selection == 3) {
				$scope.comprado = "Seleccionaste la Street";
				$scope.type = "Street";
			}
			$scope.selected_index = selection;
		}
		else {
			$scope.selected_index = 0;
		}
	}

	$scope.isPersonaliza = function () {
		return $scope.personaliza;
	}

	$scope.changePersonaliza = function () {
		$scope.personaliza = !$scope.personaliza;
	}

	$scope.customize_data = [
        {
            name: "Puños",
            image: "puños.png",
            colors: ["red","blue"]
        },
        {
            name: "Llanta delantera",
            image: "puños.png",
            colors: ["red","orange","green"]
        },
        {
            name: "Llanta trasera",
            image: "puños.png",
            colors: ["red","blue"]
        }
        // {
        //     name: "Cadena",
        //     image: "puños.png",
        //     colors: ["blue","purple","#55443A"]
        // },
        // {
        //     name: "Puños",
        //     image: "puños.png",
        //     colors: ["red","blue"]
        // },
        // {
        //     name: "Llanta delantera",
        //     image: "puños.png",
        //     colors: ["red","orange","green"]
        // },
        // {
        //     name: "Llanta trasera",
        //     image: "puños.png",
        //     colors: ["red","blue"]
        // },
        // {
        //     name: "Cadena",
        //     image: "puños.png",
        //     colors: ["blue","purple","#55443A"]
        // }
    ];

    $scope.racer_images = [{
	    src: './images/Cuadros/racer/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Cuadros/racer/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Cuadros/racer/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Cuadros/racer/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Cuadros/racer/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Cuadros/racer/img6.jpg',
	    title: 'Pic 6'
	  }, {
	    src: './images/Cuadros/racer/img7.jpg',
	    title: 'Pic 7'
	  }];

	$scope.cruise_images = [{
	    src: './images/Cuadros/cruise/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Cuadros/cruise/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Cuadros/cruise/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Cuadros/cruise/img4.jpg',
	    title: 'Pic 4'
	  // }, {
	  //   src: './images/Cuadros/cruise/img5.jpg',
	  //   title: 'Pic 5'
	  // }, {
	  //   src: './images/Cuadros/cruise/img6.jpg',
	  //   title: 'Pic 6'
	  }];

	$scope.street_images = [{
	    src: './images/Cuadros/street/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Cuadros/street/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Cuadros/street/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Cuadros/street/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Cuadros/street/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Cuadros/street/img6.jpg',
	    title: 'Pic 6'
	  }, {
	    // src: './images/Cuadros/street/img7.jpg',
	    // title: 'Pic 7'
	  }];

	  $scope.racer_thumbs = [{
	    src: './images/Cuadros/racer/thumbs/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Cuadros/racer/thumbs/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Cuadros/racer/thumbs/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Cuadros/racer/thumbs/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Cuadros/racer/thumbs/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Cuadros/racer/thumbs/img6.jpg',
	    title: 'Pic 6'
	  }, {
	    src: './images/Cuadros/racer/thumbs/img7.jpg',
	    title: 'Pic 7'
	  }];

	$scope.cruise_thumbs = [{
	    src: './images/Cuadros/cruise/thumbs/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Cuadros/cruise/thumbs/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Cuadros/cruise/thumbs/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Cuadros/cruise/thumbs/img4.jpg',
	    title: 'Pic 4'
	  // }, {
	  //   src: './images/Cuadros/cruise/img5.jpg',
	  //   title: 'Pic 5'
	  // }, {
	  //   src: './images/Cuadros/cruise/img6.jpg',
	  //   title: 'Pic 6'
	  }];

	$scope.street_thumbs = [{
	    src: './images/Cuadros/street/thumbs/img1.jpg',
	    title: 'Pic 1'
	  }, {
	    src: './images/Cuadros/street/thumbs/img2.jpg',
	    title: 'Pic 2'
	  }, {
	    src: './images/Cuadros/street/thumbs/img3.jpg',
	    title: 'Pic 3'
	  }, {
	    src: './images/Cuadros/street/thumbs/img4.jpg',
	    title: 'Pic 4'
	  }, {
	    src: './images/Cuadros/street/thumbs/img5.jpg',
	    title: 'Pic 5'
	  }, {
	    src: './images/Cuadros/street/thumbs/img6.jpg',
	    title: 'Pic 6'
	  }, {
	    // src: './images/Cuadros/street/img7.jpg',
	    // title: 'Pic 7'
	  }];
});

demoApp.controller('PersonalizaCtrl', function($scope){
	$scope.activo = false;
	$scope.color = true;
	$scope.type = 'racer';
	$scope.selected_index = 0;
	$scope.personaliza = true;

	$scope.select = function (selection) {
		for (var i = $scope.customize_data[selection-1].length - 1; i >= 0; i--) {
			for (var j = $scope.customize_data[selection-1][i].colors.length - 1; j >= 0; j--) {
				$scope.customize_data[selection-1][i].colors[j].visible = false;
			}
		};
		if($scope.selected_index==0){
			$scope.personaliza = false;
			if(selection == 1) {
				$scope.comprado = "Seleccionaste la cruise";
				$scope.type = "Cruise";
			}
			else if(selection == 2) {
				$scope.comprado = "Seleccionaste la Racer";
				$scope.type = "Racer";
			}
			else if(selection == 3) {
				$scope.comprado = "Seleccionaste la Street";
				$scope.type = "Street";
			}
			$scope.selected_index = selection;
		}
		else {
			$scope.selected_index = 0;
		}
	}

	$scope.isPersonaliza = function () {
		return $scope.personaliza;
	}
	$scope.customize = function(data, index){
		for (var i = data.colors.length - 1; i >= 0; i--) {
			data.colors[i].visible = false;
		};
		data.colors[index].visible = true;
		/*
		child = -1;
		switch(group){
			case "punos":
			child = 0;
			break;
			case "ldel":
			child = 1;
			break;
			case "ltra":
			child = 2;
			break;
			case "cadena":
			child = 3;
			break;
		}
		for (var i = $scope.customize_data[child].colors.length - 1; i >= 0; i--) {
			$scope.customize_data[child].colors[i].visible = false;
		};
		$scope.customize_data[child].colors[index].visible = true;
		*/
	}
	$scope.customize_data = [
		[],
		[
	        {
	        	name: "Cadena",
	        	slug: "cadena",
	        	image: "punos.png",
	        	colors: [
	        		{color: "blue",name: "cadena-azul", visible: false},
	        		{color: "white", name: "cadena-blanca", visible: false},
	        		{color: "purple", name: "cadena-morada", visible: false},
	        		{color: "black", name: "cadena-negra", visible: false},
	        		{color: "grey", name: "cadena-plata", visible: false},
	        		{color: "red", name: "cadena-roja", visible: false},
	        		{color: "green", name: "cadena-verde", visible: false},
	        	]
	        },
	        {

					        	
	        }

    	],
    	[
    		{
    			name: "Aro Delantero",
    			slug: "arod",
    			image: "punos.png",
    			colors: [
    				{color: "white", name: "arod-blanco", visible: false},
	        		{color: "black", name: "arod-negro", visible: false},
	        		{color: "grey", name: "arod-plata", visible: false}
    			]
    		},
    		{
    			name: "Aro Trasero",
    			slug: "arot",
    			image: "punos.png",
    			colors: [
    				{color: "white", name: "arot-blanco", visible: false},
	        		{color: "black", name: "arot-negro", visible: false},
	        		{color: "grey", name: "arot-plata", visible: false}
    			]
    		},
    		{
    			name: "Asiento",
    			slug: "asiento",
    			image: "punos.png",
    			colors: [
    				{color: "yellow", name: "asiento-amarillo", visible: false},
	        		{color: "blue", name: "asiento-azul", visible: false},
	        		{color: "white", name: "asiento-blanco", visible: false},
	        		{color: "brown", name: "asiento-cafe", visible: false},
	        		{color: "black", name: "asiento-negro", visible: false},
	        		{color: "red", name: "asiento-rojo", visible: false},
	        		{color: "pink", name: "asiento-rosa", visible: false},
	        		{color: "green", name: "asiento-verde", visible: false},
    			]
    		},
    		{
    			name: "Cadena",
    			slug: "cadena",
    			image: "punos.png",
    			colors: [
    				{color: "blue",name: "cadena-azul", visible: false},
	        		{color: "white", name: "cadena-blanca", visible: false},
	        		{color: "purple", name: "cadena-morada", visible: false},
	        		{color: "black", name: "cadena-negra", visible: false},
	        		{color: "grey", name: "cadena-plata", visible: false},
	        		{color: "red", name: "cadena-roja", visible: false},
	        		{color: "green", name: "cadena-verde", visible: false}
    			]
    		},
    		{
    			name: "Llanta delantera",
    			slug: "llantad",
    			image: "punos.png",
    			colors: [
    				{color: "blue",name: "llantad-azul", visible: false},
	        		{color: "white", name: "llantad-blanca", visible: false},
	        		{color: "purple", name: "llantad-morada", visible: false},
	        		{color: "orange", name: "llantad-naranja", visible: false},
	        		{color: "black", name: "llantad-negra", visible: false},
	        		{color: "red", name: "llantad-roja", visible: false},
	        		{color: "pink", name: "llantad-rosa", visible: false},
	        		{color: "green", name: "llantad-verde", visible: false},
    			]
    		},
    		{
    			name: "Llanta trasera",
    			slug: "llantat",
    			image: "punos.png",
    			colors: [
    				{color: "blue",name: "llantat-azul", visible: false},
	        		{color: "white", name: "llantat-blanca", visible: false},
	        		{color: "purple", name: "llantat-morada", visible: false},
	        		{color: "orange", name: "llantat-naranja", visible: false},
	        		{color: "black", name: "llantat-negra", visible: false},
	        		{color: "red", name: "llantat-roja", visible: false},
	        		{color: "pink", name: "llantat-rosa", visible: false},
	        		{color: "green", name: "llantat-verde", visible: false},
    			]
    		},
    		{
    			name: "Multi",
    			slug: "multi",
    			image: "punos.png",
    			colors: [
    				{color: "blue",name: "multi-azul", visible: false},
	        		{color: "white", name: "multi-blanca", visible: false},
	        		{color: "purple", name: "multi-morada", visible: false},
	        		{color: "black", name: "multi-negra", visible: false},
	        		{color: "grey", name: "multi-plata", visible: false},
	        		{color: "red", name: "multi-roja", visible: false},
	        		{color: "green", name: "multi-verde", visible: false},
    			]
    		},
    		{
    			name: "Pedales",
    			slug: "pedal",
    			image: "punos.png",
    			colors: [
    				{color: "blue",name: "pedal-azul", visible: false},
	        		{color: "white", name: "pedal-blanco", visible: false},
	        		{color: "purple", name: "pedal-morado", visible: false},
	        		{color: "black", name: "pedal-negro", visible: false},
	        		{color: "red", name: "pedal-rojo", visible: false},
	        		{color: "green", name: "pedal-verde", visible: false},
    			]
    		},
    		{
    			name: "Potenciad",
    			slug: "potenciad",
    			image: "punos.png",
    			colors: [
    				{color: "white", name: "potenciad-blanca", visible: false},
	        		{color: "black", name: "potenciad-negra", visible: false},
	        		{color: "grey", name: "potenciad-plata", visible: false},
    			]
    		},
    		{
    			name: "T. Asiento",
    			slug: "tasiento",
    			image: "punos.png",
    			colors: [
    				{color: "black", name: "tasiento-negro", visible: false},
	        		{color: "grey", name: "tasiento-plata", visible: false},
    			]
    		},
    		{
    			name: "Tijera",
    			slug: "tijera",
    			image: "punos.png",
    			colors: [
    				{color: "black", name: "tijera-carbono", visible: false},
	        		{color: "grey", name: "tijera-plata", visible: false},
    			]
    		}
    	]
	]
	/*
	[
        {
            name: "Puños",
            slug: "punos",
            image: "punos.png",
            colors: [
            	{color: "red", name: "punos_red", visible: false},
            	{color: "blue", name: "punos_blue", visible: false}
            ]
        },
        {
            name: "Llanta delantera",
            slug: "ldel",
            image: "punos.png",
            colors: [
            	{color: "red", name:"LD1", visible: false},
            	{color: "orange", name:"LD2", visible: false},
            	{color: "green", name:"LD3", visible: false}
            ]
        },
        {
            name: "Llanta trasera",
            slug: "ltra",
            image: "punos.png",
            colors: [
            	{color: "red", name:"LT1", visible: false},
            	{color: "orange", name:"LT2", visible: false},
            	{color: "green", name:"LT3", visible: false}
            ]
        },
        {
        	name: "Cadena",
        	slug: "cadena",
        	image: "punos.png",
        	colors: [
        		{color: "blue",name: "cadena/cadena-azul", visible: false},
        		{color: "white", name: "cadena/cadena-blanca", visible: false},
        		{color: "purple", name: "cadena/cadena-morada", visible: false},
        		{color: "black", name: "cadena/cadena-negra", visible: false},
        		{color: "grey", name: "cadena/cadena-plata", visible: false},
        		{color: "red", name: "cadena/cadena-roja", visible: false},
        		{color: "green", name: "cadena/cadena-verde", visible: false},
        	]
        },
        // {
        //     name: "Puños",
        //     image: "puños.png",
        //     colors: ["red","blue"]
        // },
        // {
        //     name: "Llanta delantera",
        //     image: "puños.png",
        //     colors: ["red","orange","green"]
        // },
        // {
        //     name: "Llanta trasera",
        //     image: "puños.png",
        //     colors: ["red","blue"]
        // },
        // {
        //     name: "Cadena",
        //     image: "puños.png",
        //     colors: ["blue","purple","#55443A"]
        // }
    ];
    */
});

demoApp.controller('MerchandiseController', function ($scope) {

});

demoApp.controller('InstagramController', function ($scope) {
	var feed = new Instafeed({
        get: 'tagged',//@bamboocycles user
        tagName: 'bamboocycles',//
        clientId: '25e1e4c68e454575b9c4d57579e21a80',
        template: '<a href="{{link}}"><img src="{{image}}" class="img-responsive"/></a>',
        limit: "12"
    });
    
    feed.run();
});

demoApp.controller('BlogController', function ($scope) {

});

demoApp.controller('BuyOrderController', function ($scope) {

});

demoApp.controller('FacebookController', function ($scope) {

	window.fbAsyncInit = function() {
		FB.init({
			appId      : '256676794517466',
			xfbml      : true,
			version    : 'v2.0'
		});

	};

		(function(d, s, id){
		 var js, fjs = d.getElementsByTagName(s)[0];
		 if (d.getElementById(id)) {
			FB=null;
		 }
		 js = d.createElement(s); js.id = id;
		 js.src = "//connect.facebook.net/en_US/sdk.js";
		 fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk')); 

	console.log("HOla mundo");
});

demoApp.controller('TwitterController', function ($scope) {

	var $ = function (id) { return document.getElementById(id); };
	function loadTwitter() {!function(d,s,id) {
		var js,fjs=d.getElementsByTagName(s)[0],
			p=/^http:/.test(d.location)?'http':'https';
			if(!d.getElementById(id)){
				js=d.createElement(s);
				js.id=id;
				js.src=p+"://platform.twitter.com/widgets.js";
				fjs.parentNode.insertBefore(js,fjs);
		}}(document,"script","twitter-wjs");}

	var twitter = $('twitter-wjs');
	if(twitter != undefined)
	{
		twitter.remove();	
	}
	
	loadTwitter(); 
});

demoApp.controller('ContactoController', function ($scope) {
	var map;
	$scope.modalShown = false;
	/*
	function initialize() {
	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(39.283674, -37.19545)
	  };
	  var map_tmp = document.getElementById('map-canvas');
	  map = new google.maps.Map(map_tmp,
	      mapOptions);
	}
	// google.maps.event.addDomListener(window, 'load', initialize);
	initialize();
	*/
	$scope.showForm = function(){
		$scope.modalShown = true;
	}
});

demoApp.controller('TalleresCtrl', function ($scope) {
	$scope.modalShown = false;
	$scope.showForm = function(){
		$scope.modalShown = true;
	}
});

demoApp.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
    	scope.dialogStyle = {};
    	if (attrs.width)
    		scope.dialogStyle.width = attrs.width;
    	if (attrs.height)
    		scope.dialogStyle.height = attrs.height;
    	scope.hideModal = function() {
        	scope.show = false;
      	};
    },
    templateUrl: "templates/modal.html"
  };
});

demoApp.directive('sliderControl', function ($rootScope) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      images: '='
    },
    link: function (scope, elem, attrs) {
    	scope.currentIndex = 0;
    	scope.setCurrentSlideIndex = function (index) {
    		scope.currentIndex = index;
    		$rootScope.$broadcast('slider.changeSlide', index);
        };
        scope.isCurrentSlideIndex = function (index) {
            return scope.currentIndex === index;
        };
    },
    templateUrl: 'templates/slider_control.html'
  };
});

demoApp.directive('slider', function ($rootScope, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      images: '='
    },
    link: function (scope, elem, attrs) {
    	scope.currentIndex = 0; // Initially the index is at the first image
		scope.direction = 'right';
 
		scope.next = function () {
			scope.direction = 'left';
		    scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
		};
		 
		scope.prev = function () {
			scope.direction = 'right';
		    scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
		};
		scope.$watch('currentIndex', function () {
		    scope.images.forEach( function (image) {
		      image.visible = false; // make every image invisible
		    });
		 
		    scope.images[scope.currentIndex].visible = true; // make the current image visible
		});

		scope.setCurrentSlideIndex = function (index) {
            scope.currentIndex = index;
        };

        scope.isCurrentSlideIndex = function (index) {
            return scope.currentIndex === index;
        };

        scope.$on('slider.changeSlide', function(e, data){
        	scope.setCurrentSlideIndex(data);
        });
        // $scope.prevSlide = function () {
        //     $scope.direction = 'left';
        //     $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        // };

        // $scope.nextSlide = function () {
        //     $scope.direction = 'right';
        //     $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        // };

		// .bxSlider();
		// console.log(elem);
		// elem.find(".bxslider").bxSlider();

		// $(document).ready(function(){
		//   // elem.find('.bxslider').bxSlider();
		// });
    },
    templateUrl: 'templates/slider_template.html'
  };
});


demoApp.animation('.slide-animation', function () {
    return {
        beforeAddClass: function (element, className, done) {
            var scope = element.scope();

            if (className == 'ng-hide') {
                var finishPoint = element.parent().width();
                if(scope.direction !== 'right') {
                    finishPoint = -finishPoint;
                }
                // TweenMax.set(element, { left: 0});
                TweenMax.to(element, 1, {left: finishPoint, onComplete: done });
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            var scope = element.scope();

            if (className == 'ng-hide') {
                element.removeClass('ng-hide');
                console.log("Entró en la animación");

                var startPoint = element.parent().width();
                if(scope.direction === 'right') {
                    startPoint = -startPoint;
                }

                TweenMax.fromTo(element, 1, { left: startPoint }, {left: 0, onComplete: done });
            }
            else {
                done();
            }
        }
    };
});

demoApp.animation('.menu-animation', function () {
    return {
        addClass: function (element, className, done) {
        	menu_one = element.find('.menu-one');
			menu_two = element.find('.menu-two');
			menu_three = element.find('.menu-three');
			menu_bicicles = element.find('.menu-bicicles');
        	
        	if (className == 'first-selected')
        	{
        		console.log(className);
				// TweenMax.to(menu_one, 1, {left: '0%', onComplete: done });
				// TweenMax.to(menu_two, 1, {left: '100%', onComplete: done });
				// TweenMax.to(menu_three, 1, {left: '133.3333%', onComplete: done });

				TweenMax.to(menu_one, 0.5, {top: '-60px', onComplete: done });
				TweenMax.to(menu_two, 0.5, {top: '-60px', onComplete: done });
				TweenMax.to(menu_three, 0.5, {top: '-60px', onComplete: function () {
					TweenMax.fromTo(menu_one, 0.5, {left: '0px'}, {top: '0px', onComplete: done });	
					TweenMax.to(menu_bicicles, 0.5, {top: '38px', onComplete: done });
				} });
        	}

        	else if (className == 'second-selected')
        	{
        		console.log(className);
				TweenMax.to(menu_one, 0.5, {top: '-60px', onComplete: done });
				TweenMax.to(menu_two, 0.5, {top: '-60px', onComplete: done });
				TweenMax.to(menu_three, 0.5, {top: '-60px', onComplete: function () {
					TweenMax.fromTo(menu_two, 0.5, {left: '0px'}, {top: '0px', onComplete: done });	
					TweenMax.to(menu_bicicles, 0.5, {top: '38px', onComplete: done });
				} });
        	}

        	else if (className == 'third-selected')
        	{
        		console.log(className);
				// TweenMax.to(menu_one, 0.5, {left: '-66.6666%', onComplete: done });
				// TweenMax.to(menu_two, 0.5, {left: '-33.3333%', onComplete: done });
				// TweenMax.to(menu_three, 0.5, {left: '0%', onComplete: done });

				TweenMax.to(menu_one, 0.5, {top: '-60px', onComplete: done });
				TweenMax.to(menu_two, 0.5, {top: '-60px', onComplete: done });
				TweenMax.to(menu_three, 0.5, {top: '-60px', onComplete: function () {
					TweenMax.fromTo(menu_three, 0.5, {left: '0px'}, {top: '0px', onComplete: done });	
					TweenMax.to(menu_bicicles, 0.5, {top: '38px', onComplete: done });
				} });

				
        	}

        	else {
        		done();
        	}

   //      	function after (element) {
			// 	TweenMax.fromTo(element, 0.5, {left: '0px'}, {top: '0px', onComplete: done });	
			// 	TweenMax.to(menu_bicicles, 0.5, {top: '38px', onComplete: done });
			// 	done();
			// }
        },
        removeClass: function (element, className, done) {
        	if (className == 'first-selected' ||
        		className == 'second-selected' ||
        		className == 'third-selected')
        	{
        		console.log("se quito la clase");

				menu_one = element.find('.menu-one');
				menu_two = element.find('.menu-two');
				menu_three = element.find('.menu-three');
				menu_bicicles = element.find('.menu-bicicles');

				// TweenMax
				// TweenMax.to(menu_one, 1, {left: '0px', top: '0px', onComplete: done });
				// TweenMax.to(menu_two, 1, {left: '33.3333%', top: '0px', onComplete: done });
				// TweenMax.to(menu_three, 1, {left: '66.6666%', top: '0px', onComplete: done });

				if ($(window).width() >= 768) {
					TweenMax.to(menu_one, 0.5, {top: '-60px', onComplete: done });
					TweenMax.to(menu_two, 0.5, {top: '-60px', onComplete: done });
					TweenMax.to(menu_three, 0.5, {top: '-60px', onComplete: done });
					TweenMax.to(menu_bicicles, 0.5, {top: '-60px', onComplete: function () {
							TweenMax.fromTo(menu_one, 0.5, {left: '0%'}, {top: '0px', onComplete: done });
							TweenMax.fromTo(menu_two, 0.5, {left: '33.3333%'}, {top: '0px', onComplete: done });
							TweenMax.fromTo(menu_three, 0.5, {left: '66.6666%'}, {top: '0px', onComplete: done });
							// done();
						}
					});
				}
				else {
					TweenMax.to(menu_one, 0.5, {top: '-60px', onComplete: done });
					TweenMax.to(menu_two, 0.5, {top: '-60px', onComplete: done });
					TweenMax.to(menu_three, 0.5, {top: '-60px', onComplete: done });
					TweenMax.to(menu_bicicles, 0.5, {top: '-60px', onComplete: function () {
							TweenMax.fromTo(menu_one, 0.5, {left: '0%'}, {top: '0px', onComplete: done });
							TweenMax.fromTo(menu_two, 0.5, {left: '0%'}, {top: '300px', onComplete: done });
							TweenMax.fromTo(menu_three, 0.5, {left: '0%'}, {top: '600px', onComplete: done });	
						}});
				}
        	}
        	else {
        		done();
        	}
        }
    };
});


demoApp.animation('.customize-change-animation', function () {
    return {
        leave: function (element, done) {
            // var scope = element.scope();

            // if (className == 'ng-hide') {
                // var finishPoint = element.parent().width();
                // if(scope.direction !== 'right') {
                //     finishPoint = -finishPoint;
                // }
                // TweenMax.set(element, { left: 0});
                // element.css("position")
                // console.log(element.scope());


                if (element.scope().isPersonaliza()){

	                TweenMax.to(element, 1, {top: '-100%', onComplete: done });
                }
                else {
	                TweenMax.to(element, 1, {top: '100%', onComplete: done });
                }
            // }
            // else {
            //     done();
            // }
        },
        enter: function (element, done) {
            // var scope = element.scope();

            // if (className == 'ng-hide') {
                // element.removeClass('ng-hide');
                // console.log("Entró en la animación");

                // var startPoint = element.parent().width();
                // if(scope.direction === 'right') {
                //     startPoint = -startPoint;
                // }

                // TweenMax.fromTo(element, 1, { left: startPoint }, {left: 0, onComplete: done });

                if (element.scope().isPersonaliza()){
	                TweenMax.fromTo(element, 1, {top: '100%'}, {top: '0', onComplete: done });
                }
                else {
	                TweenMax.fromTo(element, 1, {top: '-100%'}, {top: '0', onComplete: done });
                }
            // }
            // else {
            //     done();
            // }
        }
    };
});
