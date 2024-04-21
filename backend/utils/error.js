// Define a function to create custom error objects with status code and message
const errorHandler = (statusCode, message) => {
    // Create a new Error object
    const error = new Error()

    // Assign the provided status code and message to the error object
    error.statusCode = statusCode
    error.message = message

    // Return the error object
    return error
}

// Export the errorHandler function to make it available for use in other modules
module.exports = errorHandler
