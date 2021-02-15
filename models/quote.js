const path = require('path');
const fs = require('fs');

module.exports = class Quote {
    static pathToFile = path.join(path.dirname(process.mainModule.filename), 'data', 'quotes.json');

    constructor(quoteDate, quoteValue, quoteFile) {
        this.quoteDate = quoteDate;
        this.quoteValue = quoteValue;
    }

    save() {
        let quotes = Quote.fetchAll();
        quotes.push(this);

        fs.writeFile(Quote.pathToFile, JSON.stringify(quotes), (err) => {
            console.log(err);
        });
    }

    static fetchAll() {
        return JSON.parse(fs.readFileSync(Quote.pathToFile).toString());
    }
}