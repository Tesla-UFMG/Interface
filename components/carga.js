const expireTime = 60000

class Carga {
    constructor() {
        this.currentHistory = [];
        this.lastReceived = new Date().getTime();
        this.chargeMean = 0;

        // this.addCurrents = this.addCurrents.bind(this);
        // this.performCleanup = this.performCleanup.bind(this);
        // this.restart = this.restart.bind(this);
        // this.getCharge = this.getCharge.bind(this);
    }

    addCurrents(currents) {
        let sum = (this.normalizeValue(parseInt(currents[0])) + this.normalizeValue(parseInt(currents[2])) + this.normalizeValue(parseInt(currents[3])))/10;
        let timestamp = new Date().getTime();

        if (timestamp - this.lastReceived >= expireTime) {
            this.restart();
        }
        this.performCleanup(timestamp);
        this.currentHistory.push({current: sum, timestamp: timestamp});
        this.lastReceived = timestamp;

        let i;
        let charge = 0;
        for (i = 0; i < this.currentHistory.length-1; i++) {
            charge += (this.currentHistory[i+1].current+this.currentHistory[i].current)/2*((this.currentHistory[i+1].timestamp-this.currentHistory[i].timestamp)/1000);
        }

        this.chargeMean = charge;

    }

    performCleanup(now) {
        let firstIndex = 0;
        for (firstIndex = 0; firstIndex<this.currentHistory.length; firstIndex++) {
            if (now - this.currentHistory[firstIndex].timestamp < expireTime)
                break;
        }
        if (firstIndex > 0)
            this.currentHistory = this.currentHistory.slice(firstIndex);
    }


    restart() {
        this.currentHistory = []
        this.chargeMean = 0;
    }

    getChargeMean() {
        return this.chargeMean;
    }

    normalizeValue(value) {
        return (value > Math.pow(2, 15) ? (value-Math.pow(2, 16)): value)
    }
}

module.exports = Carga;