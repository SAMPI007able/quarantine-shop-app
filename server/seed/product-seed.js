var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quarantine-shop-db');

var products = [
    new Product({
		imagePath: 'images/muffins.jpg',
		title: 'Muffins',
        description: `A muffin is a chemically-leavened, batter-based bakery product. 
                    It's formulation is somewhere in between a low-ratio cake and quick bread. 
                    Muffin batter is typically deposited or placed into deep, small cup-shaped pan before baking. 
                    This gives the finished product a special “cupcake” or “mushroom-like” shape.`,
    price: 250,
    priceId: 'price_1I0bB1FC2iq0vKWOY2HMXelh'
    }),
    new Product({
		imagePath: 'images/chocolate.jpg',
		title: 'Cup of Chocolate',
        description: `Chocolate Cup recipes lately, some involving balloon cups, 
                    and some involving simpler things like muffin pans or silicone molds. 
                    As the latter seemed more easier to proceed with, 
                    I prefer it for a quick and clean approach if you decide to make these amazingly simple breath-taking dessert featuring chocolate muffin molds, 
                    filled with creamy chocolate ganache mousse, fresh raspberries and a drizzle of raspberry sauce!
                    In fact, they would be great even for a kid’s birthday party, especially if you ask the kids to customize their own chocolate cups to fill them with the mousse and their favorite toppings!`,
    price: 190,
    priceId: 'price_1I0bCLFC2iq0vKWOLZINnyCH'
    }),
    new Product({
		imagePath: 'images/pack-of-donuts.jpg',
		title: 'Pack Of Donuts',
        description: `Doughnuts are usually deep fried from a flour dough, 
                    and typically either ring-shaped or a number of shapes without a hole, 
                    and often filled`,
    price: 650,
    priceId: 'price_1I0bL7FC2iq0vKWOJL5fmjqD'
    }),
    new Product({
		imagePath: 'images/vanilla-icecream.jpg',
		title: 'Vanilla Icecream',
		description: `Vanilla is frequently used to flavor ice cream, especially in North America, Asia, and Europe. Vanilla ice cream, like other flavors of ice cream, was originally created by cooling a mixture made of cream, sugar, and vanilla above a container of ice and salt.`,
		price: 200,
    priceId: 'price_1I0aM7FC2iq0vKWOz5RM6bqQ'
    }),
    new Product({
		imagePath: 'images/chocolate-icecream.jpg',
		title: 'Chocolate Icecream',
		description: `Chocolate ice cream is a flavour of ice cream which is the second most common flavour of ice cream, after vanilla. Chocolate ice cream is made by blending in cocoa powder in along with the eggs (optional), cream, vanilla and sugar used to make ice cream`,
    price: 180,
    priceId: 'price_1I0bJrFC2iq0vKWOQqWLE2mD'
    }),
    new Product({
		imagePath: 'images/pudding.jpg',
		title: 'Pudding',
		description: `Pudding is a type of food that can be either a dessert or a savory (salty or spicy) dish that is part of the main meal. ... In Commonwealth countries these puddings are known as custards (or curds) if they are egg-thickened, as blancmange if starch-thickened, and as jelly if gelatin-based`,
    price: 150,
    priceId: 'price_1I0bECFC2iq0vKWOE9fBJuJm'
    }),
    new Product({
		imagePath: 'images/blueberry.jpg',
		title: 'Blueberry',
		description: `Blueberry is a crown forming, woody, perennial shrub in the family Ericaceae grown for its fruits, or berries, of the same name. The blueberry plant possesses oval or elliptical leaves which grow alternately on the stems.`,
    price: 380,
    priceId: 'price_1I0bFEFC2iq0vKWOIRRTRGtV'
    }),
    new Product({
		imagePath: 'images/waffle.jpg',
		title: 'Waffle',
		description: `A waffle is a dish made from leavened batter or dough that is cooked between two plates that are patterned to give a characteristic size, shape, and surface impression.`,
    price: 110,
    priceId: 'price_1I0bHtFC2iq0vKWOAvIJVC2a'
    })
]

let itr = 0;
do{
  products[itr++].save((err, res) => {
    if(itr === products.length) exit();
  })
}while(itr!==products.length);

function exit(){
  mongoose.disconnect();
}