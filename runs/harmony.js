const fs = require('fs');
const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;

const testSchema = new schema.Entity('testContext', {}, { idAttribute: 'id' });
const questionSchema = new schema.Entity('question', {}, { idAttribute: 'id' });
const contentSchema = new schema.Entity('content', {}, { idAttribute: 'uuid' });
const answerSchema = new schema.Entity('answer', {}, { idAttribute: 'uuid' });
const explanationSchema = new schema.Entity('explanation', {}, { idAttribute: 'uuid' });

var test = require('../data/test.js');

testSchema.define({
    questions: [questionSchema]
});

questionSchema.define({
    content: contentSchema
});


contentSchema.define({
    answers: [answerSchema],
    explanation: [explanationSchema]
});

var output = normalize(test, testSchema);
console.log('Harmony run: ');

var prettyOutput = JSON.stringify(output, null, 2);

fs.writeFile("output.json", prettyOutput, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved at output.json");
});

