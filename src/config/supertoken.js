const Passwordless = require("supertokens-node/recipe/passwordless");
const Session = require("supertokens-node/recipe/session");
const Dashboard = require("supertokens-node/recipe/dashboard");
const EmailVerification = require("supertokens-node/recipe/emailverification");


module.exports = {
    supertokens: {
        // this is the location of the SuperTokens core.
        // connectionURI: "https://try.supertokens.com",
        connectionURI: process.env.SUPERTOKENS_CONNECTION_URI,
        apiKey: process.env.SUPERTOKENS_CONNECTION_API_KEY,
        
        


    },
    appInfo: {
        appName: process.env.SUPERTOKENS_CONNECTION_APP_NAME,
        apiDomain: process.env.SUPERTOKENS_CONNECTION_API_DOMAIN,
        websiteDomain: process.env.SUPERTOKENS_CONNECTION_WEBSITE_DOMAIN,
        
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
        Passwordless.init({
            contactMethod: "EMAIL_OR_PHONE",
            flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
            emailDelivery:{
                service:{
                    sendEmail: async (email, link) => {
                        console.log(email, link);
                        return true;
                    }
                }
            }
        }),
        Session.init(),
        Dashboard.init({
            apiKey: process.env.SUPERTOKENS_CONNECTION_API_KEY,
        }),
    ],
};
