const router = require('express').Router();
const categoryService = require('../services/category.service');

// Get All Categories
router.route('').get((req, res) => {
    categoryService.getAllCategories()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create Category
router.route('').post((req, res) => {
    categoryService.createCategory(req.body)
       .then(category => res.json(category))
       .catch(err => res.status(400).json('Error: ' + err));
});

// Get Category by id
router.route('/:id').get((req, res) => {
    categoryService.getCategoryById(req.params.id)
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update Category
router.route('/:id').put((req, res) => {
    categoryService.updateCategory(req.params.id, req.body)
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete Category by id
router.route('/:id').delete((req, res) => {
    categoryService.deleteCategoryById(req.params.id)
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;