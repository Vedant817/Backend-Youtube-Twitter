//! This will be a wrapper around any async function call. Just call the below function with custom function as a parameter.
const asyncHandler = (fn) => async (req,res,next)=> { //* Higher Order Function
    try {
        return await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

export {asyncHandler}