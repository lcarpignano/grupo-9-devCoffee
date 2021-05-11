module.exports = (req, res, next) => {
	const admins = "flor@dh.com"
	if (!req.session.userLogged.mail === admins) {
		return res.redirect('/users/profile');
	}
	next();
}
