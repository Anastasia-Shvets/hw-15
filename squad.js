var squad = (function () {
    function Squad(defaultResources) {
        this.squad = [];
        if (defaultResources) this.combineResources(defaultResources);
     }
     
     Squad.prototype.isReadyToMove = function() {
        return this.squad.every(function(resourse) {
           return resourse.isReadyToMove();
        }) 
     };
    
     Squad.prototype.isReadyToFight = function() {
        return this.squad.every(function(resourse) {
           return resourse.isReadyToFight();
        }) 
     };
    
     Squad.prototype.restore = function() {
       return this.squad.forEach(function(resourse) {
          return resourse.restore();
       }) 
    };
    
     Squad.prototype.getReadyToMoveResources = function() {
       return this.squad.filter(function(resourse) {
          return resourse.getReadyToMoveResources();
       }) 
    };
    
     Squad.prototype.combineResources = function(arr) {
         return this.squad.concat(arr)
     };
    
     Squad.prototype.cloneResource = function() {
       return new Squad (
          this.resourses.map(function(resourses) {
             return resourses.clone
          })
       )
    };
    return squad
} () );






 