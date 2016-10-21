module.exports = function () {
    const normalize = require('normalizr').normalize;
    const Schema = require('normalizr').Schema;
    const arrayOf = require('normalizr').arrayOf;
    const fs = require('fs');



    const lessonsSchema = new Schema('lessons', { idAttribute: 'id' });
    const assignmentsSchema = new Schema('assignments', { idAttribute: 'id' });
    const sourcesSchema = new Schema('sources', { idAttribute: 'name' });
    const sourcesDataSchema = new Schema('data', { idAttribute: 'value' });
    const statusSchema = new Schema('status', { idAttribute: 'sequenceId' });
    const assignmentGroupsSchema = new Schema('assignmentGroups', { idAttribute: 'id' });

    var studyplan = require('../data/studyplan.js');

    lessonsSchema.define({
        assignments: arrayOf(assignmentsSchema),
        lessons: arrayOf(lessonsSchema),
        assignmentGroups: arrayOf(assignmentGroupsSchema)
    });

    assignmentGroupsSchema.define({
        assignments: arrayOf(assignmentsSchema)
    });

    assignmentsSchema.define({
        sources: arrayOf(sourcesSchema),
        status: statusSchema
    });

    sourcesSchema.define({
        data: arrayOf(sourcesDataSchema)
    });

    var output = normalize(studyplan, {
        sources: arrayOf(sourcesSchema),
        lessons: arrayOf(lessonsSchema)
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
}