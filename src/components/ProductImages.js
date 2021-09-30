export default (image) => {
    let itemImage = null;
    
    switch(image) {
        case 'super-mario-odyssey.png':
            itemImage = require('../assets/super-mario-odyssey.png')
            break;
        case 'call-of-duty-infinite-warfare.png':
            itemImage = require('../assets/call-of-duty-infinite-warfare.png')
            break;
        case 'the-witcher-iii-wild-hunt.png':
            itemImage = require('../assets/the-witcher-iii-wild-hunt.png')
            break;
        case 'call-of-duty-wwii.png':
            itemImage = require('../assets/call-of-duty-wwii.png')
            break;
        case 'mortal-kombat-xl.png':
            itemImage = require('../assets/mortal-kombat-xl.png')
            break;
        case 'shards-of-darkness.png':
            itemImage = require('../assets/shards-of-darkness.png')
            break;
        case 'terra-media-sombras-de-mordor.png':
            itemImage = require('../assets/terra-media-sombras-de-mordor.png')
            break;
        case 'fifa-18.png':
            itemImage = require('../assets/fifa-18.png')
            break;
        case 'horizon-zero-dawn.png':
            itemImage = require('../assets/horizon-zero-dawn.png')
            break;

    }
    return itemImage;
}