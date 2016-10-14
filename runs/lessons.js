module.exports = function () {
    const normalize = require('normalizr').normalize;
    const Schema = require('normalizr').Schema;
    const arrayOf = require('normalizr').arrayOf;
    
    const schema = new Schema('schema', { idAttribute: 'id' });
    const articleSchema = new Schema('article', { idAttribute: 'id' });
    const authorSchema = new Schema('author', { idAttribute: 'id' });

    var studyplan = require('../data/studyplan.js');

    schema.define({
        article: arrayOf(articleSchema)
    });

    articleSchema.define({
        author: authorSchema
    });

    var output = normalize(studyplan, schema);
    console.log('Studyplan run: ');
    console.log(JSON.stringify(output, null, 2));
    console.log('');
}