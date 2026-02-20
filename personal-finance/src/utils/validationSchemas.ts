import { required, email, minLength, helpers, sameAs, alphaNum} from "@vuelidate/validators";

export const rules = {
    text: {
        text_alphaNum: { alphaNum: helpers.withMessage(
                "This field can only contain alphaNumeric characters",
                alphaNum)},
    },
    email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Email must be a valid email", email)
    },
    password: {
        required: helpers.withMessage("Password is required", required),
        minLength: helpers.withMessage("Password must be at least 8 characters long", minLength(8))
    },
}