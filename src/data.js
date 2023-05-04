export const DATA = [
    [
        {
            id: 1,
            abv: "4.6%",
            description: "This rich honey-colored beer boasts aromas of impeccably malted barley and traditional herbal/floral hops. It also features a touch of peated malt, giving it a unique flavor that is seldom found in other beers. As they say, 'If it's not Scottish, it's crap!' (imagine a thick Scottish accent)",
            name: "Angus in Argyle",
            img: require("./assets/beverages/angusInArgyle.jpg"),
            style: "Scottish Peeted Golden Ale",
            type: "beverage",
        },
        {
            id: 2,
            abv: "5.5%",
            description: "The original classic India Pale Ale is the perfect balance of malt sweetness and hop bitterness. With a flavor reminiscent of dense, moist fruit cake followed by a dry and bittersweet finish, it's easy to become enamored with this brew. Enjoy it on draft, or try it at cellar temperature and pulled through a beer engine for an exceptional experience.",
            name: "Higgy Baby English",
            img: require("./assets/beverages/higgyBabyEnglish.jpg"),
            style: "IPA",
            type: "beverage",
        },
        {
            id: 3,
            abv: "7.2%",
            description: "Osage Orange IPA is a deliciously fruit-forward brew, boasting the addition of sweet orange peels and a touch of brown sugar for a unique and unforgettable flavor. Whether you're a die-hard IPA fan or simply looking to try something new, Osage Orange IPA is sure to delight your taste buds.",
            name: "Osage Orange",
            img: require("./assets/beverages/osageOrange.png"),
            style: "Orange IPA",
            type: "beverage",
        },
        {
            id: 4,
            abv: "4.4%",
            description: "Our brewhouse apprentice, Eric Shadowen, designed this Pale Lager with only New Zealand hops in mind, perfect for those in the Southern Hemisphere. We think he nailed it with a fruity, flowery, hoppy taste that is smooth and malty. Try it on cask or the dry-hopped version on draft for a satisfying sip.",
            name: "Zealander",
            img: require("./assets/beverages/zealander.png"),
            style: "Pale Lager",
            type: "beverage",
        },
    ],
    [
        {
            id: 1,
            description: "Brewer",
            img: require("./assets/brewery/brewery01.jpg"),
            type: "brewery",
        },
        {
            id: 2,
            description: "Brewing",
            img: require("./assets/brewery/brewery02.jpg"),
            type: "brewery",
        },
        {
            id: 3,
            description: "Out Front",
            img: require("./assets/brewery/brewery03.jpg"),
            type: "brewery",
        },
        {
            id: 4,
            description: "Growlers",
            img: require("./assets/brewery/brewery04.jpg"),
            type: "brewery",
        },
        {
            id: 5,
            description: "Shirts",
            img: require("./assets/brewery/brewery05.jpg"),
            type: "brewery",
        },
        {
            id: 6,
            description: "Taps",
            img: require("./assets/brewery/brewery06.jpg"),
            type: "brewery",
        },
        {
            id: 7,
            description: "Glass",
            img: require("./assets/brewery/brewery07.jpg"),
            type: "brewery",
        },
    ],
    [
        {
            id: 1,
            description: "Event 01",
            img: require("./assets/events/event01.jpg"),
            type: "event",
        },
        {
            id: 2,
            description: "Event 02",
            img: require("./assets/events/event02.png"),
            type: "event",
        },
        {
            id: 3,
            description: "Event 03",
            img: require("./assets/events/event03.png"),
            type: "event",
        },
        {
            id: 4,
            description: "Event 04",
            img: require("./assets/events/event04.jpg"),
            type: "event",
        },
        {
            id: 5,
            description: "Event 05",
            img: require("./assets/events/event05.png"),
            type: "event",
        },
        {
            id: 6,
            description: "Event 06",
            img: require("./assets/events/event06.jpg"),
            type: "event",
        },
    ],
    [
        {
            id: 1,
            description: "Taco",
            img: require("./assets/food/food01.jpg"),
            type: "food",
        },
        {
            id: 2,
            description: "Grilled Sandwich",
            img: require("./assets/food/food02.jpg"),
            type: "food",
        },
        {
            id: 3,
            description: "Fish n Chips",
            img: require("./assets/food/food03.jpg"),
            type: "food",
        },
        {
            id: 4,
            description: "Burger",
            img: require("./assets/food/food04.jpg"),
            type: "food",
        },
        {
            id: 5,
            description: "Wrap",
            img: require("./assets/food/food05.jpg"),
            type: "food",
        },
        {
            id: 6,
            description: "Roll",
            img: require("./assets/food/food06.jpg"),
            type: "food",
        },
        {
            id: 7,
            description: "Cup Cake",
            img: require("./assets/food/food07.jpg"),
            type: "food",
        },
        {
            id: 8,
            description: "Salad",
            img: require("./assets/food/food08.jpg"),
            type: "food",
        },
        {
            id: 9,
            description: "Bangers n Mash",
            img: require("./assets/food/food09.jpg"),
            type: "food",
        },
    ],
];

export const MENU = [
    {
        id: 1,
        name: "Homemade Chili/Soup",
        description: "Check the board for today's selection",
        size: ["cup", "bowl"],
        price: [4, 9],
        type: "nibbles"
    },
    {
        id: 2,
        name: "Pub Fries",
        description: "Hand cut fries, seasoned with our house blend of spices",
        size: ["half order", "full order"],
        price: [5, 10],
        type: "nibbles"
    },
    {   id: 3,                  
        name: "Sweet Potato Fries",
        description: "Hand cut sweet potatoe fries, seasoned with our house blend of spices",
        size: ["half order", "full order"],
        price: [7, 12],
        type: "nibbles"
    },
    {
        id: 4,
        name: "Chili Cheese Fries",
        description: "Hand cut fries, topped with our homemade chili and cheddar cheese and onions",
        size: ["full order"],
        price: [13.50],
        type: "nibbles"
    },
    {
        id: 5,
        name: "Mushroom Poutine",
        description: "Pub fries, topped with mushroom gravy and cheese curds",
        size: ["full order"],
        price: [13.50],
        type: "nibbles"
    },
    {
        id: 6,
        name: "Fried Tempeh Tots",
        description: "Served with homemade bbq sauce, ranch, or blue cheese dressing",
        size: ["full order"],
        price: [11],
        type: "nibbles"
    },
    {
        id: 7,
        name: "Warm Spinach Artichoke Dip",
        description: "Served with fresh seasonal veggies and pita bread",
        size: ["full order"],
        price: [13],
        type: "nibbles"
    },
    {
        id: 8,
        name: "Bacon Wrapped Dates",
        description: "4 dates with blue cheese and balsamic vinegar",
        size: ["full order"],
        price: [11],
        type: "nibbles"
    },
    {
        id: 9,
        name: "Stuffed Jalepenos",
        description: "3 jalepenos stuffed with cream cheese and wrapped in bacon",
        size: ["full order"],
        price: [11],
        type: "nibbles"
    },
    {
        id: 10,
        name: "Kids Burger",
        description: "Served on a grilled bun with no fixings",
        size: ["full order"],
        price: [10],
        type: "kids"
    },
    {
        id: 11,
        name: "Kids Taco",
        description: "Served with Pico de Gallo and lime on a corn tortilla with choice of chicken or cod",
        size: ["full order"],
        price: [9],
        type: "kids"
    },
    {
        id: 12,
        name: "Quesadilla",
        description: "Flour tortilla with cheddar and choice of chicken or cod",
        size: ["full order"],
        price: [8],
        type: "kids"
    },
    {
        id: 13,
        name: "Kids Grilled Cheese",
        description: "Sharp white cheddar on grilled sourdough",
        size: ["full order"],
        price: [8],
        type: "kids"
    },
    {
        id: 14,
        name: "Single Piece Fish and Chips",
        description: "1 Alaskan cod fillet served with pub fries",
        size: ["full order"],
        price: [9],
        type: "kids"
    },
    {
        id: 15,
        name: "Desserts and Specials",
        description: "Check the board for today's selection",
        size: ["full order"],
        price: ["varies"],
        type: "desserts/specials"
    }



];
