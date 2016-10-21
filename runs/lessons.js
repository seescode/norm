module.exports = function () {
    const normalize = require('normalizr').normalize;
    const Schema = require('normalizr').Schema;
    const arrayOf = require('normalizr').arrayOf;

    const lessonsSchema = new Schema('lessons', { idAttribute: 'id' });
    const assignmentsSchema = new Schema('assignments', { idAttribute: 'id' });
    const sourcesSchema = new Schema('sources', { idAttribute: 'name' });
    const sourcesDataSchema = new Schema('data', { idAttribute: 'value' });
    const statusSchema = new Schema('status', { idAttribute: 'sequenceId' });
    
    var lessons = require('../data/lessons.js');

    lessonsSchema.define({
        assignments: arrayOf(assignmentsSchema)
    });

    assignmentsSchema.define({
        sources: arrayOf(sourcesSchema),
        status: statusSchema
    });

    sourcesSchema.define({
        data: arrayOf(sourcesDataSchema)
    });

    var output = normalize(lessons, lessonsSchema);
    console.log('Lessons run: ');
    console.log(JSON.stringify(output, null, 2));
    console.log('');
}