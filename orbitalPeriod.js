function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    function calcOrbitalPeriod(satelliteAlt) {
      var totalRadius = earthRadius + satelliteAlt;
      var orbitalV = Math.sqrt(GM / totalRadius);
      var oPeriod = Math.round(((2 * Math.PI) * totalRadius) / orbitalV);
      return oPeriod;
    }
  
    var outArr=arr.map((obj)=>{return {name:obj.name, orbitalPeriod: calcOrbitalPeriod(obj.avgAlt)}});
    return outArr;
  }
  
  // Unit test
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); // orbitalPeriod: 86400  