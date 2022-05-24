const loki = require('lokijs');
const constants = require('./components/constants.js')
const fieldsDefinition = require('./components/constants')



class DatabaseHandler {
    constructor(databaseName) {
        this.db = new loki(databaseName);

        this.historyData = this.db.addCollection('HistoryData', {indices: ["field"], ttl: constants.persistanceTimeout, ttlInterval: constants.cleanUpTimeout});
        this.lastData = this.db.addCollection("LastData", {unique: ["field"], autoupdate: true});
        this.field = this.db.addCollection("field", {unique: ["field"]});

        let fields = Object.values(fieldsDefinition.fields);

        this.field.insert(fields);

        //transformando fields em uma array
        let lastDataSk = fields.map(field => { return {field: field.index, value: null} });
        this.lastData.insert(lastDataSk);
        
        this.findFieldIdByIdAndPos = this.findFieldIdByIdAndPos.bind(this);

        this.insertHistoryData = this.insertHistoryData.bind(this);
        this.insertHistoryDataNoFieldId = this.insertHistoryDataNoFieldId.bind(this);
        
        this.insertLastData = this.insertLastData.bind(this);
        this.insertLastDataNoFieldId = this.insertLastDataNoFieldId.bind(this);

        

    }


    findFieldIdByIdAndPos(id, pos) {
        return this.field.chain().find({id: id}).find({pos: pos}).data().index;
    }

    insertHistoryData(fieldId, value) {
        this.historyData.insert({field: fieldId, value: value, timestamp: new Date().getTime()});
        
    }

    insertHistoryDataNoFieldId(id, pos, value) {
        const fieldId = this.findFieldIdByIdAndPos(id, pos);
        this.insertData(fieldId, value);
    }

    insertLastData(fieldId, value) {
        var d = this.lastData.findOne({"field": fieldId});
        d.value = value;
        this.lastData.update(d);
    }

    insertLastDataNoFieldId(id, pos, value) {
        const fieldId = this.findFieldIdByIdAndPos(id, pos);
        this.insertLastData(fieldId, value);
    }


    retrieveLastData(fieldId) {
        return this.lastData.findOne({field: fieldId}).value;
    }

    retrieveHistoryData(fieldId) {
        return this.historyData.chain().find({field: fieldId}).data({removeMeta: true});
    }

    
    
}

module.exports = DatabaseHandler;