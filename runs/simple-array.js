
const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;

const articleSchema = new schema.Entity('article', {}, { idAttribute: 'id' });
const authorSchema = new schema.Entity('author', {}, { idAttribute: 'id' });

articleSchema.define({
    author: authorSchema
});

var data = [{
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
}];

var output = normalize(data, [articleSchema]);
console.log('Simple array run: ')
console.log(JSON.stringify(output, null, 2));
console.log('');
