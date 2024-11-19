const WORDS = ['which', 'there', 'their', 'about', 'would', 'these', 'other', 'words', 'could', 'write', 'first', 'water', 'after', 'where', 'right', 'think', 'three', 'years', 'place', 'sound', 'great', 'again', 'still', 'every', 'small', 'found', 'those', 'never', 'under', 'might', 'while', 'house', 'world', 'below', 'asked', 'going', 'large', 'until', 'along', 'shall', 'being', 'often', 'earth', 'began', 'since', 'study', 'night', 'light', 'above', 'paper', 'parts', 'young', 'story', 'point', 'times', 'heard', 'whole', 'white', 'given', 'means', 'music', 'miles', 'thing', 'today', 'later', 'using', 'money', 'lines', 'order', 'group', 'among', 'learn', 'known', 'space', 'table', 'early', 'trees', 'short', 'hands', 'state', 'black', 'shown', 'stood', 'front', 'voice', 'kinds', 'makes', 'comes', 'close', 'power', 'lived', 'vowel', 'taken', 'built', 'heart', 'ready', 'quite', 'class', 'bring', 'round', 'horse', 'shows', 'piece', 'green', 'stand', 'birds', 'start', 'river', 'tried', 'least', 'field', 'whose', 'girls', 'leave', 'added', 'color', 'third', 'hours', 'moved', 'plant', 'doing', 'names', 'forms', 'heavy', 'ideas', 'cried', 'check', 'floor', 'begin', 'woman', 'alone', 'plane', 'spell', 'watch', 'carry', 'wrote', 'clear', 'named', 'books', 'child', 'glass', 'human', 'takes', 'party', 'build', 'seems', 'blood', 'sides', 'seven', 'mouth', 'solve', 'north', 'value', 'death', 'maybe', 'happy', 'tells', 'gives', 'looks', 'shape', 'lives', 'steps', 'areas', 'sense', 'speak', 'force', 'ocean', 'speed', 'women', 'metal', 'south', 'grass', 'scale', 'cells', 'lower', 'sleep', 'wrong', 'pages', 'ships', 'needs', 'rocks', 'eight', 'major', 'level', 'total', 'ahead', 'reach', 'stars', 'store', 'sight', 'terms', 'catch', 'works', 'board', 'cover', 'songs', 'equal', 'stone', 'waves', 'guess', 'dance', 'spoke', 'break', 'cause', 'radio', 'weeks', 'lands', 'basic', 'liked', 'trade', 'fresh', 'final', 'fight', 'meant', 'drive', 'spent', 'local', 'waxes', 'knows', 'train', 'bread', 'homes', 'teeth', 'coast', 'thick', 'brown', 'clean', 'quiet', 'sugar', 'facts', 'steel', 'forth', 'rules', 'notes', 'units', 'peace', 'month', 'verbs', 'seeds', 'helps', 'sharp', 'visit', 'woods', 'chief', 'walls', 'cross', 'wings', 'grown', 'cases', 'foods', 'crops', 'fruit', 'stick', 'wants', 'stage', 'sheep', 'nouns', 'plain', 'drink', 'bones', 'apart', 'turns', 'moves', 'touch', 'angle', 'based', 'range', 'marks', 'tired', 'older', 'farms', 'spend', 'shoes', 'goods', 'chair', 'twice', 'cents', 'empty', 'alike', 'style', 'broke', 'pairs', 'count', 'enjoy', 'score', 'shore', 'roots', 'paint', 'heads', 'shook', 'serve', 'angry', 'crowd', 'wheel', 'quick', 'dress', 'share', 'alive', 'noise', 'solid', 'cloth', 'signs', 'hills', 'types', 'drawn', 'worth', 'truck', 'piano', 'upper', 'loved', 'usual', 'faces', 'drove', 'cabin', 'boats', 'towns', 'proud', 'court', 'model', 'prime', 'fifty', 'plans', 'yards', 'prove', 'tools', 'price', 'sheet', 'smell', 'boxes', 'raise', 'match', 'truth', 'roads', -'threw', 'enemy', 'lunch', 'chart', 'scene', 'graph', 'doubt', 'guide', 'winds', 'block', 'grain', 'smoke', 'mixed', 'games', 'wagon', 'sweet', 'topic', 'awake', 'rocky', 'march', 'fault', 'swift', 'faint', 'civil', 'ghost', 'feast', 'blade', 'limit', 'germs', 'reads', 'ducks', 'dairy', 'worst', 'gifts', 'lists', 'stops', 'rapid', 'brick', 'claws', 'beads', 'beast', 'skirt', 'cakes', 'lions', 'frogs', 'tries', 'nerve', 'grand', 'armed', 'treat', 'honey', 'moist', 'legal', 'penny', 'crown', 'shock', 'taxes', 'sixty', 'altar', 'pulls', 'sport', 'drums', 'talks', 'dying', 'dates', 'drank', 'blows', 'lever', 'wages', 'proof', 'drugs', 'tanks', 'sings', 'tails', 'pause', 'herds', 'arose', 'hated', 'clues', 'novel', 'shame', 'burnt', 'races', 'flash', 'weary', 'heels', 'token', 'coats', 'spare', 'shiny', 'alarm', 'dimes', 'sixth', 'clerk', 'mercy', 'sunny', 'guest', 'float', 'shone', 'pipes', 'worms', 'bills', 'sweat', 'suits', 'smart', 'upset', 'rains', 'sandy', 'rainy', 'parks', 'sadly', 'fancy', 'rider', 'unity', 'bunch', 'rolls', 'crash', 'craft', 'newly', 'gates', 'hatch', 'paths', 'funds', 'wider', 'grace', 'grave', 'tides', 'admit', 'shift', 'sails', 'pupil', 'tiger', 'angel', 'cruel', 'agent', 'drama', 'urged', 'patch', 'nests', 'vital', 'sword', 'blame', 'weeds', 'screw', 'vocal', 'bacon', 'chalk', 'cargo', 'crazy', 'acted', 'goats', 'arise', 'witch', 'loves', 'queer', 'dwell', 'backs', 'ropes', 'shots', 'merry', 'phone', 'cheek', 'peaks', 'ideal', 'beard', 'eagle', 'creek', 'cries', 'ashes', 'stall', 'yield', 'mayor', 'opens', 'input', 'fleet', 'tooth', 'cubic', 'wives', 'burns', 'poets', 'apron', 'spear', 'organ', 'cliff', 'stamp', 'paste', 'rural', 'baked', 'chase', 'slice', 'slant', 'knock', 'noisy', 'sorts', 'stays', 'wiped', 'blown', 'piled', 'clubs', 'cheer', 'widow', 'twist', 'tenth', 'hides', 'comma', 'sweep', 'spoon', 'stern', 'crept', 'maple', 'deeds', 'rides', 'muddy', 'crime', 'jelly', 'ridge', 'drift', 'dusty', 'devil', 'tempo', 'humor', 'sends', 'steal', 'tents', 'waist', 'roses', 'reign', 'noble', 'cheap', 'dense', 'linen', 'geese', 'woven', 'posts', 'hired', 'wrath', 'salad', 'bowed', 'tires', 'shark', 'belts', 'grasp', 'blast', 'polar', 'fungi', 'tends', 'pearl', 'loads', 'jokes', 'veins', 'frost', 'hears', 'loses', 'hosts', 'diver', 'phase', 'toads', 'alert', 'tasks', 'seams', 'coral', 'focus', 'naked', 'puppy', 'jumps', 'spoil', 'quart', 'macro', 'fears', 'flung', 'spark', 'vivid', 'brook', 'steer', 'spray', 'decay', 'ports', 'socks', 'urban', 'goals', 'grant', 'minus', 'films', 'tunes', 'shaft', 'firms', 'skies', 'bride', 'wreck', 'flock', 'stare', 'hobby', 'bonds', 'dared', 'faded', 'thief', 'crude', 'pants', 'flute', 'votes', 'tonal', 'radar', 'wells', 'skull', 'hairs', 'argue', 'wears', 'dolls', 'voted', 'caves', 'cared', 'broom', 'scent', 'panel', 'fairy', 'olive', 'bends', 'prism', 'lamps', 'cable', 'peach', 'ruins', 'rally', 'schwa', 'lambs', 'sells', 'cools', 'draft', 'charm', 'limbs', 'brake', 'gazed', 'cubes', 'delay', 'beams', 'fetch', 'ranks', 'array', 'harsh', 'camel', 'vines', 'picks', 'naval', 'purse', 'rigid', 'crawl', 'toast', 'soils', 'sauce', 'basin', 'ponds', 'twins', 'wrist', 'fluid', 'pools', 'brand', 'stalk', 'robot', 'reeds', 'hoofs', 'buses', 'sheer', 'grief', 'bloom', 'dwelt', 'melts', 'risen', 'flags', 'knelt', 'fiber', 'roofs', 'freed', 'armor', 'piles', 'aimed', 'algae', 'twigs', 'lemon', 'ditch', 'drunk', 'rests', 'chill', 'slain', 'panic', 'cords', 'tuned', 'crisp', 'ledge', 'dived', 'swamp', 'clung', 'stole', 'molds', 'yarns', 'liver', 'gauge', 'breed', 'stool', 'gulls', 'awoke', 'gross', 'diary', 'rails', 'belly', 'trend', 'flask', 'stake', 'fried', 'draws', 'actor', 'handy', 'bowls', 'haste', 'scope', 'deals', 'knots', 'moons', 'essay', 'thump', 'hangs', 'bliss', 'dealt', 'gains', 'bombs', 'clown', 'palms', 'cones', 'roast', 'tidal', 'bored', 'chant', 'acids', 'dough', 'camps', 'swore', 'lover', 'hooks', 'males', 'cocoa', 'punch', 'award', 'reins', 'ninth', 'noses', 'links', 'drain', 'fills', 'nylon', 'lunar', 'pulse', 'flown', 'elbow', 'fatal', 'sites', 'moths', 'meats', 'foxes', 'mined', 'attic', 'fiery', 'mount', 'usage', 'swear', 'snowy', 'rusty', 'scare', 'traps', 'relax', 'react', 'valid', 'caked', 'bangs', 'erupt', 'poker', 'olden', 'cramp', 'voter', 'poses', 'manly', 'slump', 'fined', 'grips', 'gaped', 'purge', 'hiked', 'solos', 'skier', 'eaves', 'totem', 'fused', 'latex', 'veils', 'mused', 'mains', 'myrrh', 'racks', 'galls', 'gnats', 'bouts', 'sisal', 'shuts', 'hoses', 'dryly', 'dawns', 'proxy', 'clove', 'duets', 'dregs', 'tardy', 'briar', 'grimy', 'ultra', 'meaty', 'halve', 'wails', 'suede', 'mauve', 'envoy', 'arson', 'coves', 'gooey', 'brews', 'sofas', 'chums', 'amaze', 'zooms', 'abbot', 'halos', 'scour', 'suing', 'cribs', 'sagas', 'enema', 'wordy', 'harps', 'coupe', 'molar', 'flops', 'weeps', 'mints', 'ashen', 'felts', 'askew', 'munch', 'mewed', 'divan', 'vices', 'jumbo', 'blobs', 'blots', 'spunk', 'acrid', 'topaz', 'cubed', 'clans', 'flees', 'slurs', 'gnaws', 'welds', 'fords', 'emits', 'agate', 'pumas', 'mends', 'darks', 'dukes', 'plies', 'canny', 'hoots', 'oozes', 'lamed', 'fouls', 'clefs', 'nicks', 'mated', 'skims', 'brunt', 'tuber', 'tinge', 'fates', 'ditty', 'thins', 'frets', 'eider', 'bayou', 'mulch', 'fasts', 'amass', 'damps', 'morns', 'friar', 'palsy', 'vista', 'croon', 'conch', 'udder', 'tacos', 'skits', 'mikes', 'quits', 'preen', 'aster', 'adder', 'elegy', 'pulpy', 'scows', 'baled', 'hovel', 'lavas', 'crave', 'optic', 'welts', 'busts', 'knave', 'razed', 'shins', 'totes', 'scoot', 'dears', 'crock', 'mutes', 'trims', 'skein', 'doted', 'shuns', 'veers', 'fakes', 'yoked', 'wooed', 'hacks', 'sprig', 'wands', 'lulls', 'seers', 'snobs', 'nooks', 'pined', 'perky', 'mooed', 'frill', 'dines', 'booze', 'tripe', 'prong', 'drips', 'odder', 'levee', 'antic', 'sidle', 'pithy', 'corks', 'yelps', 'joker', 'fleck', 'buffs', 'scram', 'tiers', 'bogey', 'doled', 'irate', 'vales', 'coped', 'hails', 'elude', 'bulks', 'aired', 'vying', 'stags', 'strew', 'cocci', 'pacts', 'scabs', 'silos', 'dusts', 'yodel', 'terse', 'jaded', 'baser', 'jibes', 'foils', 'sways', 'forgo', 'slays', 'preys', 'treks', 'quell', 'peeks', 'assay', 'lurks', 'eject', 'boars', 'trite', 'belch', 'gnash', 'wanes', 'lutes', 'whims', 'dosed', 'chewy', 'snipe', 'umbra', 'teems', 'dozes', 'kelps', 'upped', 'brawn', 'doped', 'shush', 'rinds', 'slush', 'moron', 'voile', 'woken', 'fjord', 'sheik', 'jests', 'kayak', 'slews', 'toted', 'saner', 'drape', 'patty', 'raves', 'sulfa', 'grist', 'skied', 'vixen', 'civet', 'vouch', 'tiara', 'homey', 'moped', 'runts', 'serge', 'kinky', 'rills', 'corns', 'brats', 'pries', 'amble', 'fries', 'loons', 'tsars', 'datum', 'musky', 'pigmy', 'gnome', 'ravel', 'ovule', 'icily', 'liken', 'lemur', 'frays', 'silts', 'sifts', 'plods', 'ramps', 'tress', 'earls', 'dudes', 'waive', 'karat', 'jolts', 'peons', 'beers', 'horny', 'pales', 'wreak', 'lairs', 'lynch', 'stank', 'swoon', 'idler', 'abort', 'blitz', 'ensue', 'atone', 'bingo', 'roves', 'kilts', 'scald', 'adios', 'cynic', 'dulls', 'memos', 'elfin', 'dales', 'peels', 'peals', 'bares', 'sinus', 'crone', 'sable', 'hinds', 'shirk', 'enrol', 'wilts', 'roams', 'duped', 'cysts', 'mitts', 'safes', 'spats', 'coops', 'filet', 'knell', 'refit', 'covey', 'punks', 'kilns', 'fitly', 'abate', 'talcs', 'heeds', 'duels', 'wanly', 'ruffs', 'gauss', 'lapel', 'jaunt', 'whelp', 'cleat', 'gauzy', 'dirge', 'edits', 'wormy', 'moats', 'smear', 'prods', 'bowel', 'frisk', 'vests', 'bayed', 'rasps', 'tames', 'delve', 'embed', 'befit', 'wafer', 'ceded', 'novas', 'feign', 'spews', 'larch', 'huffs', 'doles', 'mamas', 'hulks', 'pried', 'brims', 'irked', 'aspic', 'swipe', 'mealy', 'skimp', 'bluer', 'slake', 'dowdy', 'penis', 'brays', 'pupas', 'egret', 'flunk', 'phlox', 'gripe', 'peony', 'douse', 'blurs', 'darns', 'slunk', 'lefts', 'chats', 'inane', 'vials', 'stilt', 'rinks', 'woofs', 'wowed', 'bongs', 'frond', 'ingot', 'evict', 'singe', 'shyer', 'flied', 'slops', 'dolts', 'drool', 'dells', 'whelk', 'hippy', 'feted', 'ether', 'cocos', 'hives', 'jibed', 'mazes', 'trios', 'sirup', 'squab', 'laths', 'leers', 'pasta', 'rifts', 'lopes', 'alias', 'whirs', 'diced', 'slags', 'lodes', 'foxed', 'idled', 'prows', 'plait', 'malts', 'chafe', 'cower', 'toyed', 'chefs', 'keels', 'sties', 'racer', 'etude', 'sucks', 'sulks', 'micas', 'czars', 'copse', 'ailed', 'abler', 'rabid', 'golds', 'croup', 'snaky', 'visas', 'palls', 'mopes', 'boned', 'wispy', 'raved', 'swaps', 'junky', 'doily', 'pawns', 'ammos', 'weeny', 'urger', 'kudzu', 'paren', 'bolos', 'fetor', 'nitty', 'techy', 'lieth', 'somas', 'darky', 'villi', 'gluon', 'janes', 'cants', 'farts', 'socle', 'jinns', 'ruing', 'slily', 'ricer', 'hadda', 'wowee', 'rices', 'nerts', 'cauls', 'swive', 'lilty', 'micks', 'arity', 'pasha', 'finif', 'oinky', 'gutty', 'tetra', 'wises', 'wolds', 'balds', 'picot', 'whats', 'shiki', 'bungs', 'snarf', 'legos', 'dungs', 'stogy', 'berms', 'tangs', 'vails', 'roods', 'morel', 'sware', 'elans', 'latus', 'gules', 'razer', 'doxie', 'buena', 'overs', 'gutta', 'zincs', 'nates', 'kirks', 'tikes', 'donee', 'jerry', 'mohel', 'ceder', 'doges', 'unmap', 'folia', 'rawly', 'snark', 'topoi', 'ceils', 'immix', 'yores', 'diest', 'bubba', 'pomps', 'forky', 'turdy', 'lawzy', 'poohs', 'worts', 'gloms', 'beano', 'muley', 'barky', 'tunny', 'auric', 'funks', 'gaffs', 'cordy', 'curdy', 'lisle', 'toric', 'soyas', 'reman', 'mungy', 'carpy', 'apish', 'oaten', 'pubis', 'gooks', 'wonky', 'stied', 'hypos', 'assed', 'spumy', 'osier', 'roble', 'rumba', 'biffy', 'pupal'];


let presentWord;
let currentRow = 0;
let currentGuess = '';
const maxGuesses = 6;
let guessedLetters = {};

function startGame() {
    presentWord = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    currentRow = 0;
    currentGuess = '';
    guessedLetters = {};

    resetBoard();
    resetKeyboard();
    toggleButtons(false);
    hideMessage();
}

function resetBoard() {
    const board = document.getElementById('board');
    board.innerHTML = ''; // Clear the board

    for (let row = 0; row < maxGuesses; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        for (let col = 0; col < 5; col++) {
            const box = document.createElement('div');
            box.className = 'box';
            box.id = `box-${row}-${col}`;
            rowDiv.appendChild(box);
        }

        board.appendChild(rowDiv);
    }
}

function resetKeyboard() {
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';

    const rows = [
        'QWERTYUIOP',
        ' ASDFGHJKL ',
        '  ZXCVBNM   ',
    ];

    rows.forEach((row) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';

        row.split('').forEach((key) => {
            if (key === ' ') {
                const spacer = document.createElement('div');
                spacer.className = 'key spacer';
                rowDiv.appendChild(spacer);
            } else {
                const button = document.createElement('div');
                button.className = 'key';
                button.textContent = key;
                button.addEventListener('click', () => handleKeyPress(key));
                rowDiv.appendChild(button);
            }
        });

        keyboard.appendChild(rowDiv);
    });

    // Add special keys (Enter and Backspace)
    const specialRow = document.createElement('div');
    specialRow.className = 'keyboard-row';

    const enterKey = document.createElement('div');
    enterKey.className = 'key special';
    enterKey.textContent = 'Enter';
    enterKey.addEventListener('click', submitGuess);
    specialRow.appendChild(enterKey);

    const backspaceKey = document.createElement('div');
    backspaceKey.className = 'key special';
    backspaceKey.textContent = 'Backspace';
    backspaceKey.addEventListener('click', () => {
        currentGuess = currentGuess.slice(0, -1);
        updateCurrentRow();
    });
    specialRow.appendChild(backspaceKey);

    keyboard.appendChild(specialRow);
}

function handleKeyPress(key) {
    if (key === 'Enter') {
        submitGuess();
    } else if (key === 'Backspace') {
        currentGuess = currentGuess.slice(0, -1);
        updateCurrentRow();
    } else if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
        currentGuess += key.toUpperCase();
        updateCurrentRow();
    }
}

function updateCurrentRow() {
    const rowBoxes = document.querySelectorAll(`.row:nth-child(${currentRow + 1}) .box`);
    rowBoxes.forEach((box, idx) => {
        box.textContent = currentGuess[idx] || '';
    });
}

function submitGuess() {
    if (currentGuess.length < 5) {
        showMessage('Word must be 5 letters!', true);
        return;
    }

    const rowBoxes = document.querySelectorAll(`.row:nth-child(${currentRow + 1}) .box`);
    const targetLetters = presentWord.split('');
    const guessLetters = currentGuess.split('');

    guessLetters.forEach((letter, idx) => {
        const box = rowBoxes[idx];
        const key = Array.from(document.querySelectorAll('.key')).find(
            (button) => button.textContent === letter
        );

        if (letter === targetLetters[idx]) {
            box.classList.add('correct');
            guessedLetters[letter] = 'correct';
        } else if (targetLetters.includes(letter)) {
            box.classList.add('present');
            guessedLetters[letter] =
                guessedLetters[letter] !== 'correct' ? 'present' : 'correct';
        } else {
            box.classList.add('absent');
            guessedLetters[letter] = guessedLetters[letter] || 'absent';
        }

        if (key) key.className = `key ${guessedLetters[letter]}`;
    });

    if (currentGuess === presentWord) {
        showMessage('Congratulations! You guessed the word!');
        toggleButtons(true);
        return;
    }

    currentRow++;
    if (currentRow >= maxGuesses) {
        showMessage(`Game Over! The word was "${presentWord}".`, true);
        toggleButtons(true);
        return;
    }

    currentGuess = '';
}

function showMessage(message, isError = false) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = isError ? 'error' : '';
    messageDiv.classList.remove('hidden');
}

function hideMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.add('hidden');
}

function toggleButtons(isGameOver = false) {
    document.getElementById('reset-game').classList.toggle('hidden', isGameOver);
    document.getElementById('play-again').classList.toggle('hidden', !isGameOver);
}

document.getElementById('start-game').addEventListener('click', () => {
    document.getElementById('rules-modal').style.display = 'none';
    startGame();
});

document.getElementById('reset-game').addEventListener('click', startGame);
document.getElementById('play-again').addEventListener('click', startGame);

document.addEventListener('keydown', (e) => handleKeyPress(e.key));
