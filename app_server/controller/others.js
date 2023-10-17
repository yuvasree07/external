/* GET 'about us' page */
module.exports.about = function(req, res) {
  res.render('generic-text', {
      title: 'About Scholarshiply',
      content: 'Scholarshiply would feature an extensive database of scholarships specifically tailored to students pursuing BTech, MBBS, and MS degrees. Each scholarship listing would include information about eligibility criteria, application deadlines, award amounts, and any specific requirements. The website would also feature a blog with articles about the latest scholarship opportunities and tips for applying for scholarships.The website would offer search and filter options to allow users to narrow down their scholarship search based on various criteria such as the level of study, field of study, location, or other relevant parameters.'
  });
};