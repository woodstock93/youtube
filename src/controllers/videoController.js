export const trending = (req, res) => res.render("home");
export const see = (req, res) => res.render("watch");
export const upload = (req, res) => res.send("Upload Videos");
export const edit = (req, res) => res.render("edit");
export const remove = (req, res) => res.send("Remove Videos");
export const search = (req, res) => res.send("Search Videos");
