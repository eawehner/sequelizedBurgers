var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerData = {
            burgers: data
        };
        console.log(burgerData);
        res.render("index", burgerData);
    });
});

router.get("/api/burgers", function(req, res) {
    burger.all(function(data) {
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert(req.body.burger_name, function(data) {
        res.json({ id: res.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var location = req.params.id;
    burger.update({devoured: req.body.devoured}, location, function(data) {
        if (res.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;