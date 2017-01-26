
const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;

const dataSchema = new schema.Entity('schema', {}, { idAttribute: 'id' });
const articleSchema = new schema.Entity('article', {}, { idAttribute: 'id' });
const authorSchema = new schema.Entity('author', {}, { idAttribute: 'id' });

dataSchema.define({
    article: [articleSchema]
});

articleSchema.define({
    author: authorSchema
});

var data = {
    id: 1,
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

var output = normalize(data, dataSchema);
console.log('Simple object run: ')
console.log(JSON.stringify(output, null, 2));
console.log('');
