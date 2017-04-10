/**
 * Created by Joshua_Barta on 3/27/2017.
 */
import {Product} from './models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    sku: 'LS-BLU',
    name: 'Jedi Lightsaber',
    variant: 'Blue',
    description: 'For over a thousand generations, the Jedi Knights were the guardians of peace and justice in the Old Republic. Now you too can protect the galaxy with this real working lightsaber!',
    price: 700000,
    currency: 'imperial credits',
    availability: '',
    disclaimer: 'Not responsible for death, dismemberment, or loss of limb caused by misuse of product. Seriously, this is a blade of pure energy intended for use by highly-trained space wizards. Do you really need a warning?',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Lightsaber%2C_silver_hilt%2C_blue_blade.png'
  },
  {
    id: 2,
    sku: 'FLUX-1985',
    name: 'Flux Capacitor',
    description: 'The great Dr. Emmett \"Doc\" Brown came up with the idea for the flux capacitor after falling off the toilet he was standing on while hanging a clock and hitting his head on the sink. Skip the concussion and order your own flux capacitor today ',
    availability: 'Sold Out',
    disclaimer: 'Not responsible for universe-destroying paradoxes.	Activation requires 1.21 gigawatts of electricity. Fusion power recommended, will run on plutonium or lightning. Compatibility not guaranteed with vehicles other than 1981, 1982, or 1983 DeLorean',
    variant: '',
    price: 0,
    currency: '',
    imgUrl: 'https://d13yacurqjgara.cloudfront.net/users/27981/screenshots/151070/flux-capacitor.jpg'
  },
  {
    id: 3,
    sku: 'WAND-5597',
    name: 'Magic Wand',
    variant: '11", Holly, Phoenix Feather Core',
    description: 'Every good wizard needs a wand.',
    price: 7,
    currency: 'galleons',
    availability: 'Sold Out',
    disclaimer: 'Muggles are not supposed to have wands.',
    imgUrl: 'http://ii.wbshop.com/fcgi-bin/iipsrv.fcgi?FIF=/images/warnerbros/source/warnerbros/hpnbwandlu.tif&wid=3000&cvt=jpeg'
  },
  {
    id: 4,
    sku: 'POKEBALL',
    name: 'Poké Ball',
    variant: '',
    description: 'A standard Poké Ball, used for catching Pokémon',
    price: 200,
    currency: '₱',
    availability: '',
    disclaimer: '',
    imgUrl: 'https://burnttoastbooks.files.wordpress.com/2015/04/pokeball.png'
  }
];
