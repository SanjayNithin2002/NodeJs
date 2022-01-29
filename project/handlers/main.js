module.exports.home = function (req, res) {
    res.render('home');
};

module.exports.about = function (req, res) {
    res.render('about', {
        author: {
            username: "SanjayNithin2002",
            repository: "NodeJS"
        },
        dynamicString: [
            { firstname: "Sanjay", lastname: "Nithin" },
            { firstname: "Ajay", lastname: "Devgan" },
            { firstname: "Ishani", lastname: "Bhavya" },
            { firstname: "Jawahar", lastname: "Prayush" }
        ],
        id: false // change it to true and access {{if ../id}}
    });
};

module.exports.customLayout = function (req, res) {
    res.render('customLayoutTest', {
        layout: 'custom',
        copyrightYear: '2022'
    });
};

module.exports.ajax_data_call = function (req, res) {
    res.json({
        type: 'AJAX'
    });
};

module.exports.tours_hood_river = function (req, res) {
    res.render('tours/hood-river');
};

module.exports.tours_request_group_rate =function (req, res) {
    res.render('tours/request-group-rate');
};

module.exports.newsletter = function (req, res) {
    var name = req.body.name || " ", email = req.body.email || " ";
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        if (req.xhr) {
            return res.json({ error: "Invalid request" });
        }
        req.session.flash = {
            type: "danger",
            intro: "intro",
            message: "this is a message"
        };
        return res.redirect(303, "/about");
    }
    if (req.xhr) return res.json({ success: true });
    req.session.flash = {
        type: 'success',
        intro: 'thank you',
        message: "Success message"
    };
    return res.redirect(303, "/about");
};