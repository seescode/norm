const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;

const assignments = new schema.Entity('assignments', {}, { idAttribute: 'id' });
const sourcesSchema = new schema.Entity('sources', {}, { idAttribute: 'name' });
const sourcesDataSchema = new schema.Entity('data', {}, { idAttribute: 'value' });
const statusSchema = new schema.Entity('status', {}, { idAttribute: 'sequenceId' });

var studyplan = require('../data/assignments.js');

assignments.define({
    sources: [sourcesSchema],
    status: statusSchema
});

sourcesSchema.define({
    data: [sourcesDataSchema]
});

var output = normalize(studyplan, assignments);
console.log('Assignments run: ');
console.log(JSON.stringify(output, null, 2));
console.log('');
