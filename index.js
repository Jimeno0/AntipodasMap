  	require([
      "esri/map",
      "esri/geometry/webMercatorUtils",
      "dojo/domReady!"], 
      function(Map,webMercatorUtils) {
        var map = new Map("mapDiv", {
          center: [-56.049, 38.485],
          zoom: 3,
          basemap: "streets"
        });
      
        var map2 = new Map("mapDiv2", {
          center: [123.951, -38.485],
          zoom: 3,
          basemap: "streets" 
        });

        map.on("mouse-drag-end",function(){
        	antipoda(map,map2);
        });

        map2.on("mouse-drag-end",function(){
        	antipoda(map2,map);
        });

        map.on("zoom-end",function(change3){
          Zoom = map.getZoom();
          map2.setZoom(Zoom);
          antipoda(map,map2);
        });

         map2.on("zoom-end",function(change3){
          Zoom = map2.getZoom();
          map.setZoom(Zoom);
          antipoda(map2,map);
        });


        function antipoda(mapaOrigen,mapaDestino){
            var center = mapaOrigen.extent.getCenter();
            var CenterGeoMap = webMercatorUtils.xyToLngLat(center.x,center.y);
            var Long1 = CenterGeoMap[0];
            var Lat1 = CenterGeoMap[1];

            
            var Lat2 = -Lat1 ;
            if (Long1 < 0 ) {
            	var  Long2 = Long1 + 180 ;
            }
            else {
            	var  Long2 = Long1 - 180 ;
            };

            center2 = [Long2,Lat2];
            mapaDestino.centerAt(center2);
        };

		    var BtnStrts = document.getElementById('BtnStrts');
	      BtnStrts.addEventListener('click',function(){
	        map.setBasemap('streets');
	        map2.setBasemap('streets');
        });


        var BtnTopo = document.getElementById('BtnTopo');
        BtnTopo.addEventListener('click',function(){
	        map.setBasemap('topo');
	        map2.setBasemap('topo');
        });


        var BtnSat = document.getElementById('BtnSat');
        BtnSat.addEventListener('click',function(){
	        map.setBasemap('satellite');
	        map2.setBasemap('satellite');
        });


        var BtnOcean = document.getElementById('BtnOcean');
        BtnOcean.addEventListener('click',function(){
	        map.setBasemap('oceans');
	        map2.setBasemap('oceans');
        });

        var sanFran = document.getElementById('btnSanFran');
        sanFran.addEventListener('click',function(){
          map.centerAndZoom([-123.032, 37.7272],7);
        });

        var singa = document.getElementById('btnSinga');
        singa.addEventListener('click',function(){
          map.centerAndZoom([103.8500700, 1.28967],5);
        });

        var Esp = document.getElementById('btnEsp');
        Esp.addEventListener('click',function(){
          map.centerAndZoom([-3.688510, 40.453010],4);
        });


        var coord = document.getElementById('btnCoord');
        coord.addEventListener('click',function(){
          var Latitud = parseFloat(lat.value);
          var Longitud = parseFloat(long.value);
          map.centerAndZoom([Longitud,Latitud],6);
        });

  	});



