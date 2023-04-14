const asyncHandler = require('express-async-handler')

// Description:         Get goals
// Route:               GET /api/goals
// Access:              Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get goals" })
})

// Description:         Set goal
// Route:               POST /api/goals
// Access:              Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: "Set goals" })
})

// Description:         Update goal
// Route:               PUT /api/goals/:id
// Access:              Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// Description:         Delete goal
// Route:               DELETE /api/goals/:id
// Access:              Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}