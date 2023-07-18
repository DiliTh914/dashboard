class ResourceNotFoundError extends Error {
    constructor(args){
        super(args);
        this.name = "ResourceNotFound"
    }
}

module.exports = ResourceNotFoundError;