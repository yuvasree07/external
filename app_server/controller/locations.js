/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Scholarshiply - Find a Scholarship best for you',
        pageHeader: {
            title: 'Scholarshiply',
            strapline: 'Find a Scholarship best for you'
        },
        sidebar: "Looking for a Scholarship? Scholarshiply helps you find Scholarships to work when out and about. Perhaps with coffee, cake or a pint? Let Scholarshiply help you find the Scholarships you're looking for.",
        locations: [{
            name: 'BTech Scholarships',
            address: 'is available in the website',
            rating: 3,
            facilities: ['INSPIRE', 'NTPC', 'TATA TRUSTS'],
            distance: '100m',
            href: '/location'
        }, {
            name: 'MBBS Scholarships',
            address: 'is available in the website',
            rating: 4,
            facilities: ['Nirankari Rajmata Scholarship Scheme 2022-23', 'LOréal India Scholarship', 'Nurturing Clinical Scientists (NCS) Scheme'],
            distance: '200m',
            href:'/location1'
        }, {
            name: 'MS Scholarships',
            address: 'is available in the website',
            rating: 2,
            facilities: ['Aga Khan Foundation Scholarship.', 'Fullbright-Nehru Masters Fellowship.', 'Inlaks Scholarship.'],
            distance: '250m',
            href:'/location2'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'BTech Scholarships',
        pageHeader: {
            title: 'BTech Scholarships'
        },
        sidebar: {
            context: 'is on Scholarshiply because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'BTech Scholarship',
            address: 'is available in the website',
            rating: 3,
            facilities: ['INSPIRE', 'NTPC', 'TATA TRUSTS'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Aishwarya',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'best scholarships are provided here'
            }, {
                author: 'Aman Reddy',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'Good choices are given here'
            }]
        }
    });
};
module.exports.locationInfo1 = function(req, res) {
    res.render('location-info2', {
        title: 'MBBS Scholarships',
        pageHeader: {
            title: 'MBBS Scholarships'
        },
        sidebar: {
            context: 'is on Scholarshiply because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'MBBS Scholarships',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Nirankari Rajmata Scholarship Scheme 2022-23', 'LOréal India Scholarship', 'Nurturing Clinical Scientists (NCS) Scheme'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'muskaan',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'This website helped me financially'
            }, {
                author: 'varshini',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.'
            }]
        }
    });
};
module.exports.locationInfo2 = function(req, res) {
    res.render('location-info3', {
        title: 'MS Scholarships',
        pageHeader: {
            title: 'MS Scholarships'
        },
        sidebar: {
            context: 'is on Scholarshiply because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'MS Scholarships',
            address: 'available in the website',
            rating: 2,
            facilities: ['Aga Khan Foundation Scholarship.', 'Fullbright-Nehru Masters Fellowship.', 'Inlaks Scholarship.'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'DhruvLunawath',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'This website helped me a lot to find the correct scholarships'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'I got many options because of this website.thanks a lot'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Scholarshiply'
        }
    });
};