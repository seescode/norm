module.exports = function () {
    const normalize = require('normalizr').normalize;
    const Schema = require('normalizr').Schema;
    const arrayOf = require('normalizr').arrayOf;

    const articleSchema = new Schema('article', { idAttribute: 'id' });
    const authorSchema = new Schema('author', { idAttribute: 'id' });

    articleSchema.define({
        author: authorSchema
    });

    var data = {
        article: [{
            id: 1,
            title: 'Some Article',
            author: {
                id: 1,
                name: 'Dan'
            }
        }, {
            id: 2,
            title: 'Other Article',
            author: {
                id: 1,
                name: 'Dan'
            }
        }]
    };

    var output = normalize(data, {
        article: arrayOf(articleSchema)
    });
    console.log('No id run: ')
    console.log(JSON.stringify(output, null, 2));
    console.log('');
}