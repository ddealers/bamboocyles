<div ng-switch on="color" class="marco superior" ng-animate="'animate'">
	<div ng-switch-when="true" class="flex-container superior inicial my-switch-animation">
		<div class="margenes section-one flex-container-horizontal" ng-click="agrandar(1)">
			<img class="img-responsive" src="../images/Bicicletas/cruise.jpg" height="458" width="458" alt="">
			<h1>Cruise</h1>
		</div>
		<div class="margenes section-two flex-container-horizontal" ng-click="agrandar(2)">
			<img class="img-responsive" src="../images/Bicicletas/racer.jpg" height="458" width="458" alt="">
			<h1>Raiser</h1>
		</div>
		<div class="margenes section-three flex-container-horizontal" ng-click="agrandar(3)">
			<img class="img-responsive" src="../images/Bicicletas/street.jpg" height="458" width="458" alt="">
			<h1>Street</h1>
		</div>
	</div>
	<div ng-switch-when="false" class="flex-container superior comprar my-switch-animation">
		<div ng-click="agrandar(0)" class="margenes section-one">
			<div class="goback-sectiond">Regresar</div>
		</div>
		<div class="margenes section-twoo section-two">
		</div>
	</div>
</div>