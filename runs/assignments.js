module.exports = function () {
    const normalize = require('normalizr').normalize;
    const Schema = require('normalizr').Schema;
    const arrayOf = require('normalizr').arrayOf;
    
    const schema = new Schema('schema', { idAttribute: 'id' });
    const sourcesSchema = new Schema('sources', { idAttribute: 'name' });
    const sourcesDataSchema = new Schema('data', { idAttribute: 'value' });
    const statusSchema = new Schema('status', { idAttribute: 'sequenceId' });
    
    var studyplan = require('../data/assignments.js');

    schema.define({
        sources: arrayOf(sourcesSchema),
        status: statusSchema
    });

    sourcesSchema.define({
        data: arrayOf(sourcesDataSchema)
    });

    var output = normalize(studyplan, schema);
    console.log('Assignments run: ');
    console.log(JSON.stringify(output, null, 2));
    console.log('');
}