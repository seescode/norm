const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;

//Step 1: Create your schemas with an id
const articleSchema = new schema.Entity('article', {}, { idAttribute: 'id' });
const authorSchema = new schema.Entity('author', {}, { idAttribute: 'id' });

//Step 2: Define relationships between your schemas
articleSchema.define({
    author: authorSchema
});

//Step 3: Run normalize
var output = normalize(data, [articleSchema]);


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

console.log('Simple array run: ')
console.log(JSON.stringify(output, null, 2));
console.log('');
