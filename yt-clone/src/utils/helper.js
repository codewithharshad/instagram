var nameList = [
    'Nova','Cosmic','Galactic','Stellar','Nebula','Pulse',
    'Aurora','Comet','Meteor','Quasar','Celestial','Infinity',
    'Zephyr','Cascade','Eclipse','Horizon','Zenith','Vertex',
    'Spectrum','Radiant','Solar','Lunar','Supernova','Abyss',
    'Echo','Serenity','Tempest','Whisper','Oracle','Phoenix',
    'Sphinx','Mirage','Genesis','Elysium','Oblivion','Chronos',
    'Apex','Zen','Pantheon','Harmony','Solstice','Zenith',
    'Aether','Sylvan','Frost','Icarus','Pyre','Nyx','Silhouette',
    'Equinox','Astral','Voyage','Empyrean','Polaris','Galaxy',
    'Horizon','Savant','Sentinel','Paragon','Mystic','Crusade',
    'Eon','Pandora','Helios','Nemesis','Aegis','Anomaly','Zephyr',
    'Inferno','Catalyst','Reverie','Oasis','Eternal','Crescent',
    'Avalanche','Miracle','Enigma','Euphoria','Haven','Radiance',
    'Ethereal','Cascade','Solitude','Elysian','Labyrinth','Siren',
    'Halcyon','Eclipse','Myriad','Ascension','Veritas','Seraph',
    'Venture','Echelon','Epiphany','Aeon','Sanctuary','Eclipse',
    'Harbinger','Nexus','Paradigm','Spectra','Whisper','Reverie',
    'Voyage','Pulse','Silhouette','Apex','Mystique','Utopia',
    'Elysium','Quintessence','Cosmos','Serenade','Savant','Vesper',
    'Aurora','Orbit','Pinnacle','Radiance','Eclipse','Zephyr',
    'Nebula','Paradise','Eon','Oasis','Spectrum','Miracle',
    'Infinity','Harmony','Helios','Nemesis','Equinox','Empyrean'
];


var finalName = ""

export function getRandomName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
   
};




//  export  function makeRandomMessage(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }

// generate a random YouTube-like comment
export function makeRandomMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const emojis = ['😀', '😂', '😍', '👍', '👎', '❤️', '🔥', '💯', '🙌', '😊', '😎', '😜', '😇', '🤔', '😱'];
    const words = [
        'Wow', 'Amazing', 'Incredible', 'This', 'Is', 'So', 'Cool', 'Awesome', 
        'Nice', 'I', 'Love', 'It', 'Great', 'Job', 'Keep', 'Up', 'the', 'Good', 'Work',
        'Fantastic', 'Brilliant', 'Excellent', 'Outstanding', 'Impressive', 'WOW', 'OMG'
    ];

    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        if (Math.random() < 0.3) { // 30% chance for emoji
            result += emojis[Math.floor(Math.random() * emojis.length)] + ' ';
        } else { // 70% chance for words
            const word = words[Math.floor(Math.random() * words.length)];
            result += word + ' ';
        }
        counter += 1;
    }
    return result.trim();
}
