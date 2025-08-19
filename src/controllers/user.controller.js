import { asyncHandler } from "../utils/asyncHandler.js";

const registerUSer = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "chai or code"
    })

} )

export {registerUSer}