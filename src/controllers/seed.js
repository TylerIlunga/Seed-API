require('../db').getClient();

const Entry = require('../db').Entry;
module.exports = {
  create(req, res) {
    const entries = Number(process.env.entries);
    if (!entries || !Number.isInteger(entries) || entries < 1) {
      return console.error(
        'Please provide a positive integer for your entry count!',
      );
    }
    console.time('Total Duration');
    let entryCreationPromises = [];
    console.log('constructing entries...');
    for (let i = 0; i < entries; i++) {
      Entry.create({
        campaign_id: req.body.campaign_id,
        email: `user${i}@tmail.com`,
        username: `user_${i}`,
        views: i + 1,
      });
    }
    console.log('populating database...');
    Promise.all(entryCreationPromises)
      .then(result => {
        console.log('entries created!');
        console.timeEnd('Total Duration');
        return res.json({ success: true, error: null });
      })
      .catch(error => {
        console.log('Promise.all() error[/api/seed]', error);
        return res.json({ error: 'Error saving entries.', success: false });
      });
  },
};
