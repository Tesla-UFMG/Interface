class Hodometro {

    constructor() {
        this.lastSpeed = 0;
        this.lastReceived = new Date().getTime();
        this.distance - 0;
    }

    addSpeed(speed) {
        let timestamp = new Date().getTime();
    }

    restart() {

    }

    getDistance() {
        return this.distance;
    }
}

module.exports = Hodometro;