
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
		for (var i = $scope.customize_data.length - 1; i >= 0; i--) {
			for (var j = $scope.customize_data[i].colors.length - 1; j >= 0; j--) {
				$scope.customize_data[i].colors[j].visible = false;
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
	$scope.customize = function(group, index){
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
		}
		for (var i = $scope.customize_data[child].colors.length - 1; i >= 0; i--) {
			$scope.customize_data[child].colors[i].visible = false;
		};
		$scope.customize_data[child].colors[index].visible = true;
	}
	$scope.customize_data = [
        {
            name: "Puños",
            slug: "punos",
            image: "puños.png",
            colors: [
            	{color: "red", name: "punos_red", visible: false},
            	{color: "blue", name: "punos_blue", visible: false}
            ]
        },
        {
            name: "Llanta delantera",
            slug: "ldel",
            image: "puños.png",
            colors: [
            	{color: "red", name:"LD1", visible: false},
            	{color: "orange", name:"LD2", visible: false},
            	{color: "green", name:"LD3", visible: false}
            ]
        },
        {
            name: "Llanta trasera",
            slug: "ltra",
            image: "puños.png",
            colors: [
            	{color: "red", name:"LT1", visible: false},
            	{color: "orange", name:"LT2", visible: false},
            	{color: "green", name:"LT3", visible: false}
            ]
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
	function initialize() {
	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(-34.397, 150.644)
	  };
	  var map_tmp = document.getElementById('map-canvas');
	  map = new google.maps.Map(map_tmp,
	      mapOptions);
	  console.log("Entrón aca");
	  console.log(map_tmp);
	}
	
	$scope.showForm = function(){
		$scope.modalShown = true;
	}
	// google.maps.event.addDomListener(window, 'load', initialize);
	initialize();
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

				TweenMax.to(menu_one, 0.5, {top: '-40px', onComplete: done });
				TweenMax.to(menu_two, 0.5, {top: '-40px', onComplete: done });
				TweenMax.to(menu_three, 0.5, {top: '-40px', onComplete: function () {
					TweenMax.fromTo(menu_one, 0.5, {left: '0px'}, {top: '0px', onComplete: done });	
					TweenMax.to(menu_bicicles, 0.5, {top: '38px', onComplete: done });
				} });
        	}

        	else if (className == 'second-selected')
        	{
        		console.log(className);
				TweenMax.to(menu_one, 0.5, {top: '-40px', onComplete: done });
				TweenMax.to(menu_two, 0.5, {top: '-40px', onComplete: done });
				TweenMax.to(menu_three, 0.5, {top: '-40px', onComplete: function () {
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

				TweenMax.to(menu_one, 0.5, {top: '-40px', onComplete: done });
				TweenMax.to(menu_two, 0.5, {top: '-40px', onComplete: done });
				TweenMax.to(menu_three, 0.5, {top: '-40px', onComplete: function () {
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
					TweenMax.to(menu_one, 0.5, {top: '-40px', onComplete: done });
					TweenMax.to(menu_two, 0.5, {top: '-40px', onComplete: done });
					TweenMax.to(menu_three, 0.5, {top: '-40px', onComplete: done });
					TweenMax.to(menu_bicicles, 0.5, {top: '-40px', onComplete: function () {
							TweenMax.fromTo(menu_one, 0.5, {left: '0%'}, {top: '0px', onComplete: done });
							TweenMax.fromTo(menu_two, 0.5, {left: '33.3333%'}, {top: '0px', onComplete: done });
							TweenMax.fromTo(menu_three, 0.5, {left: '66.6666%'}, {top: '0px', onComplete: done });
							// done();
						}
					});
				}
				else {
					TweenMax.to(menu_one, 0.5, {top: '-40px', onComplete: done });
					TweenMax.to(menu_two, 0.5, {top: '-40px', onComplete: done });
					TweenMax.to(menu_three, 0.5, {top: '-40px', onComplete: done });
					TweenMax.to(menu_bicicles, 0.5, {top: '-40px', onComplete: function () {
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
