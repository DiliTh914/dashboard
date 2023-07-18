const CategoryModel = require('../models/category.model');

const categoryService = {

    createCategory: (category) => {
        const name = category.name;
        const parentCategory = category.parentCategory;
        let subCategories = [];
        if (category.subCategories && Array.isArray(category.subCategories)) {
            subCategories = category.subCategories;
        }
        const description = category.description;

        const categoryModel = new CategoryModel({name, parentCategory, subCategories, description});
        return categoryModel.save();
    },

    getAllCategories: () => {
        return CategoryModel.find();
    },

    getCategoryById: (id) => {
        return CategoryModel.findById(id);
    },

    updateCategory: (id, updatedCategory) => {
        return CategoryModel.findById(id)
            .then(category => {
                category.name = updatedCategory.name;
                category.parentCategory = updatedCategory.parentCategory;
                category.subCategories = updatedCategory.subCategories;
                category.description = updatedCategory.description;

                return category.save();
            });
    },

    deleteCategoryById: (id) => {
        return CategoryModel.findByIdAndDelete(id);
    },
}

module.exports = categoryService;