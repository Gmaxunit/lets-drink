declare let APP_ENV: string;

export const config: any = {

    customData: {
        loginText: {
            greeting: 'Login to start your Happy Hour search',
            facebook: {
                button: 'Login with Facebook'
            },
            google: {
                button: 'Login with Google'
            },
            guest: {
                continue: 'Continue as guest >>>'
            }
        }
    }
}


//Export custom data
export const loginText: any = config.customData.loginText;
