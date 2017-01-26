const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;
const fs = require('fs');



const lessonsSchema = new schema.Entity('lessons', { idAttribute: 'id' });
const assignmentsSchema = new schema.Entity('assignments', { idAttribute: 'id' });
const sourcesSchema = new schema.Entity('sources', { idAttribute: 'name' });
const sourcesDataSchema = new schema.Entity('data', { idAttribute: 'value' });
const statusSchema = new schema.Entity('status', { idAttribute: 'sequenceId' });
const assignmentGroupsSchema = new schema.Entity('assignmentGroups', { idAttribute: 'id' });

var studyplan = require('../data/studyplan.js');

lessonsSchema.define({
    assignments: [assignmentsSchema],
    lessons: [lessonsSchema],
    assignmentGroups: [assignmentGroupsSchema]
});

assignmentGroupsSchema.define({
    assignments: [assignmentsSchema]
});

assignmentsSchema.define({
    sources: [sourcesSchema],
    status: statusSchema
});

sourcesSchema.define({
    data: [sourcesDataSchema]
});

var output = normalize(studyplan, {
    sources: [sourcesSchema],
    lessons: [lessonsSchema]
});

console.log('StudyPlan run: ');
//console.log(JSON.stringify(output));
var prettyOutput = JSON.stringify(output, null, 2);

fs.writeFile("output.json", prettyOutput, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved at output.json");
});
