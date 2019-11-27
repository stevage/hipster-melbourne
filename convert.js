const data = require('./data.json');
console.log(['longitude','latitude','name','description','url','address','category'].join('\t'));
data.features.forEach(feature => {
    const p = feature.properties;
    const row = [...feature.geometry.coordinates, 
        p.name,
        p.keywords,
        p.url,
        '"' + p.address + '"',
        p.category]

    console.log(row.join('\t'));
});