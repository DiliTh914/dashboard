const CategoryModel = require('../models/category.model');
const ResourceNotFoundError = require("../common/resource-not-found.error");

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
        return CategoryModel.findById(id).then(category => {
            if (!category) throw new ResourceNotFoundError("category not found for id: " + id);
            return category
        });
    },

    updateCategory: (id, updatedCategory) => {
        return CategoryModel.findById(id)
            .then(category => {

                if (!category) throw new ResourceNotFoundError("category not found for id: " + id);

                category.name = updatedCategory.name;
                category.parentCategory = updatedCategory.parentCategory;
                category.description = updatedCategory.description;

                if(updatedCategory.subCategories && Array.isArray(updatedCategory.subCategories)) {
                    category.subCategories = updatedCategory.subCategories;
                }

                return category.save();
            });
    },

    deleteCategoryById: (id) => {
        return CategoryModel.findByIdAndDelete(id).then(category => {
            if (!category) throw new ResourceNotFoundError("category not found for id: " + id);
            return category
        });
    },
}

module.exports = categoryService;