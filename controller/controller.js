module.exports.projecten_get = (req, res) => {
    res.render('projecten');
}

module.exports.home_get = (req, res) => {
    res.render('home');
}

module.exports.get_CV = async  (req, res) => {
  res.json({ cv : 1})
  // try {
  //   const result = await db.query(`SELECT * FROM cv`);
  //   res.json(result.rows);

  // } catch (err){
  //   console.error(err);
  //   res.status(500).send('Database query gefaald')
  // }
};