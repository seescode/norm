const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;

const lessonsSchema = new schema.Entity('lessons', { idAttribute: 'id' });
const assignmentsSchema = new schema.Entity('assignments', { idAttribute: 'id' });
const sourcesSchema = new schema.Entity('sources', { idAttribute: 'name' });
const sourcesDataSchema = new schema.Entity('data', { idAttribute: 'value' });
const statusSchema = new schema.Entity('status', { idAttribute: 'sequenceId' });

var lessons = require('../data/lessons.js');

lessonsSchema.define({
    assignments: [assignmentsSchema]
});

assignmentsSchema.define({
    sources: [sourcesSchema],
    status: statusSchema
});

sourcesSchema.define({
    data: [sourcesDataSchema]
});

var output = normalize(lessons, lessonsSchema);
console.log('Lessons run: ');
console.log(JSON.stringify(output, null, 2));
console.log('');
