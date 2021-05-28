// import dotenv from 'dotenv'
// dotenv.config()


export const URLS = {
    LOGIN_PAGE: 'https://www.saucedemo.com/' 
}


export const CREDENTIALS = {
    VALID_USER: {
        USERNAME: 'standard_user',
        PASSWORD: 'secret_sauce'
    },
    NONVALID_USER: {
        USERNAME:'MyUser',
        PASSWORD:'MyPassword'
    },
    LOCKED_USER: {
        USERNAME:'locked_out_user',
        PASSWORD:'secret_sauce'
    },
    PROBLEM_USER: {
        USERNAME:'problem_user',
        PASSWORD:'secret_sauce'
    },
    PERFORMANCE_USER: {
        USERNAME:'performance_glitch_user',
        PASSWORD:'secret_sauce'
    }
}

export const MSGS = {
    ERROR_MESSAGES: {
        NONVALID_USER: {
            MESSAGE: 'Epic sadface: Username and password do not match any user in this service'
        },
        LOCKED_USER: {
            MESSAGE: 'Epic sadface: Sorry, this user has been locked out.'
        },
        OTHER_USER: {
            MESSAGE: ''
        }
    }    
}

export const ITEMS ={
    BAGPACK:{
        ITEM_NAME: 'Sauce Labs Backpack',
        ITEM_DESCRIPTION: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'
    },
    BIKELIGHT:{
        ITEM_NAME: 'Sauce Labs Bike Light',
        ITEM_DESCRIPTION: 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.'
    },
    JACKET:{
        ITEM_NAME: 'Sauce Labs Fleece Jacket',
        ITEM_DESCRIPTION: 'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.'
    },
    TSHIRT:{
        ITEM_NAME: 'Sauce Labs Bolt T-Shirt',
        ITEM_DESCRIPTION: ''
    },
    TSHIRT_RED:{
        ITEM_NAME: 'Test.allTheThings() T-Shirt (Red)',
        ITEM_DESCRIPTION: 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.'
    },
    BABYSHIRT:{
        ITEM_NAME: 'Sauce Labs Onesie',
        ITEM_DESCRIPTION: "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel."
    }
}