/**
 * @openapi
 * components:
 *   schemas:
 *     SuccessResponse:
 *       type: object
 *       required:
 *         - success
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         data:
 *           type: object
 *         meta:
 *           type: object
 *
 *     ErrorResponse:
 *       type: object
 *       required:
 *         - success
 *         - error
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         error:
 *           type: string
 *           example: "Internal server error"
 *         details:
 *           type: object
 *
 *     ValidationErrorResponse:
 *       type: object
 *       required:
 *         - success
 *         - error
 *         - details
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         error:
 *           type: string
 *           example: "Validation failed"
 *         details:
 *           type: object
 *           required:
 *             - formErrors
 *             - fieldErrors
 *           properties:
 *             formErrors:
 *               type: array
 *               items:
 *                 type: string
 *               example: []
 *             fieldErrors:
 *               type: object
 *               additionalProperties:
 *                 type: array
 *                 items:
 *                   type: string
 *               example:
 *                 sender.email: ["Invalid email"]
 *
 *     RateLimitErrorResponse:
 *       type: object
 *       required:
 *         - success
 *         - error
 *         - details
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         error:
 *           type: string
 *           example: "Too many API requests"
 *         details:
 *           type: object
 *           required:
 *             - limit
 *             - remaining
 *             - reset
 *             - retryAfter
 *           properties:
 *             limit:
 *               type: number
 *               description: Max requests allowed in the time window
 *               example: 100
 *             remaining:
 *               type: number
 *               description: Requests remaining in current window
 *               example: 0
 *             reset:
 *               type: number
 *               description: Unix timestamp when limit resets
 *               example: 1739836800000
 *             retryAfter:
 *               type: number
 *               description: Seconds until the limit resets
 *               example: 60
 *
 *     SendEmailRequest:
 *       type: object
 *       required:
 *         - project
 *         - sender
 *         - body
 *       properties:
 *         project:
 *           type: string
 *           enum:
 *             - astercraft-portfolio
 *             - consulting-rozinskaya
 *           description: Target project identifier
 *           example: "astercraft-portfolio"
 *         sender:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             name:
 *               type: string
 *               example: "John Doe"
 *             email:
 *               type: string
 *               format: email
 *               example: "john@example.com"
 *         subject:
 *           type: string
 *           default: "New Form Submission"
 *           example: "Contact Form Submission"
 *         body:
 *           type: object
 *           additionalProperties:
 *             type: string
 *           description: Form fields as key-value pairs
 *           example:
 *             message: "I'd like to discuss a project"
 *             phone: "+1234567890"
 */

export {};
