// const express = require ("express");
const router = express.Router(); 
const db = require("../model/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then((dbWorkout) => res.json(dbWorkout))
      .catch((err) => {
        res.json(err);
      });
  });

router.put("/api/workout/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate (
        params.id, 
        { $push: {exercises: body}},
        // makes sure new exercises fits schema requirements
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout)
    });
})
.catch(err => {
    res.json(err);
})