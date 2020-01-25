var militaryResource = (function () {
    function MilitaryResource(type, health, maxHealth, distance, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.distance = distance;
        this.maxDistance = maxDistance;
    }

    var resourse = new MilitaryResource('warrior', 100, 200, 0, 300);

    MilitaryResource.prototype.isReadyToMove = function() {
        return this.maxDistance > this.distance
    }

    MilitaryResource.prototype.isReadyToFight = function() {
        return this.health > 0;
    };

    MilitaryResource.prototype.restore = function() {
        return this.distance === 0 ? this.maxHealth : this.health
    };

    MilitaryResource.prototype.clone = function() {
        return new MilitaryResource(this.type, this.health, this.maxHealth, this.distance, this.maxDistance)
    };

    return militaryResource
} () );