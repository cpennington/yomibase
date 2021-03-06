import React from 'react';
import {CantCombo, Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';

const normalAttack = mkNormal(0.6);

const normalThrow = mkNormal(0.6, {
    damage: 6,
    comboPts: 3,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>A+',
    maxDamage: 28,
    goodCombo: (rank) => 't' + rank + '>K+',
    goodDamage: 22,
});

export const menelker = {
    theme: {
        // primary: #CA393E, #D9D5D6
        text: 'linear-gradient(#f4d7d8, #e7e4e5)',
        headshot: require('../images/menelker.jpg'),
    },
    summary: {
        name: 'Menelker',
        fullName: 'Master Menelker',
        title: 'Deathstrike Dragon',
        hitPoints: 70,
        maxCombo: 5,
        attackSpeed: <span>x.6 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.6 <ComboDetails points={3} max={3} kd={true}/></div>,
        throwDamage: 6,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T', 'A'],
        blocks: [5, 6, 7, 8, 9, 'T'],
        dodges: [2, 3, 4],
        innateAbilities: [
            {
                name: 'Bleeding Wounds',
                text: <div>
                    Whenver you hit the opponent with a black face card
                    attack (even multiple times in a combo), draw a card
                    and they discard a card. <i>(Aces are not face cards.)</i> During
                    the powerup phase, you may power up for black
                    face cards. <i>(You may still power up for Aces, too.)</i>
                </div>,
            },
        ],
        // quote: "You'll be sorry you held yourself back from 'taboo tactics' when you're fighting for your life."
        cardAbilities: [
            {
                rank: 7,
                name: 'Bonecracker',
                timing: 'During Combat',
                text: <span>
                    When you throw the opponent with this card,
                    they reveal their hand and discard a card of your choice.
                </span>
            },
            {
                rank: 'T',
                name: 'Into Oblivion',
                timing: 'Draw Phase',
                text: <span>
                    Banish a card from the opponent's discard pile. They must
                    then banish another card of that same rank from their hand
                    or their deck. <i>(They shuffle their deck afterwards. Banished cards
                    are removed from the game.)</i>
                </span>,
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>K++>A+', maxDamage: 40, goodCombo: '2>3>4>K++', goodDamage: 31}),
        normalAttack(3, {maxCombo: '3>K++>A+', maxDamage: 41, goodCombo: '3>4>5>K++', goodDamage: 34}),
        normalAttack(4, {maxCombo: '4>K++>A+', maxDamage: 42, goodCombo: '4>5>6>K++', goodDamage: 37}),
        normalAttack(5, {maxCombo: '5>K++>A+', maxDamage: 43, goodCombo: '5>6>K++>J', goodDamage: 32}),
        normalAttack(6, {maxCombo: '6>K++>A+', maxDamage: 44, goodCombo: '6>K++>K++', goodDamage: 38}),
        {
            speed: 2.4, rank: 'J', name: 'Chaos Orb', damage: '7',
            chip: '2', comboPts: 1, comboType: <Ender/>, kd: false,
        },
        {
            speed: 4.0, rank: 'J', pumpWith: '+J+J', name: 'Nether Orb',
            damage: 9, pump: 9, chip: 6, comboPts: 3, comboType: <Starter/>,
            maxCombo: 'J++>A+', maxDamage: 49, goodCombo: 'J++>K++', goodDamage: 44,
        },
        {
            speed: 0.0, rank: 'Q', pumpWith: '+x+x', name: 'Rising Dragon',
            damage: 8, pump: 4, chip: 2, comboPts: 3, comboType: <Ender/>,
            maxCombo: 'Q++', maxDamage: 16, goodCombo: 'Q+', goodDamage: 12,
        },
        {
            speed: 2.2, rank: 'K', pumpWith: '+x+x', name: 'Sweeping Claws',
            damage: 6, pump: 5, chip: 2, comboPts: 2, comboType: <Linker/>,
            maxCombo: 'K++>6>A+', maxDamage: 44, goodCombo: 'K++>K++', goodDamage: 32,
        },
        {
            speed: 1.2, rank: 'A', pumpWith: '+A', name: 'Dragon Breath',
            damage: 11, pump: 11, chip: 3, comboPts: 2, comboType: <Ender/>,
            maxCombo: 'A+', maxDamage: 22,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 4.6, rank: 'AAAA', name: 'Deathstrike Dragon', damage: 55,
            comboType: <CantCombo/>, comboPts: null, kd: false,
        },
    ],
};

const EX = Object.assign({}, menelker, {
    summary: Object.assign({}, menelker.summary, {
        name: <span>EX {menelker.summary.name}</span>,
        fullName: <span>EX {menelker.summary.fullName}</span>,
        innateAbilities: [
            {
                name: 'Gushing Wounds',
                text: <span>
                    When you hit the opponent with a face card attack
                    (even multiple times in a combo), draw a card and they
                    discard a card. <i>(Aces are not face cards.)</i> During
                    the powerup phase, you may power up for any
                    non-Joker cards from your discard pile.
                </span>
            },
        ],
        // quote: "I'll show you some 'taboo tactics,' but you'll only get one look.
        cardAbilities: menelker.summary.cardAbilities.concat([
            {
                rank: 'D',
                name: 'Aerial Nether Orb',
                timing: 'During Combat',
                text: "If the opponent dodges this, they can't follow up."
            },
        ]),
        attacks: menelker.summary.attacks.concat(['D']),
    }),
    attacks: menelker.attacks.concat([
        {
            speed: 2.4, rank: 'D', name: 'Aerial Nether Orb', damage: 8, chip: 2,
            comboPts: 1, comboType: <Starter/>,
            maxCombo: 'D>K++>A+', maxDamage: 46, goodCombo: 'D>3>4>5>6', goodDamage: 26
        },
    ]),
});

const DSD = Object.assign({}, EX, {
    summary: Object.assign({}, EX.summary, {
        name: 'Deathstrike Dragon',
        fullName: 'Deathstrike Dragon',
        preTitle: 'Master Menelker',
        title: null,
        hitPoints: 140,
        maxCombo: 6,
        maxHandSize: 20,
        cardsPerTurn: 2,
        innateAbilities: [
            {
                name: 'Multiple Masteries',
                text: <span>
                    Your red face cards do double damage.
                    Your black face cards draw a card and make the opponent
                    discard a card whenever they hit. (Aces are not face cards.)
                    Whenever you snapback, you can start a new combo on
                    the incoming character.
                    You can power up for any cards in your draw deck,
                    and for face cards and Aces from your discard pile.
                </span>
            },
        ],
        // quote: "This is the first and last time you'll experience my full power."
    }),
});

menelker.variants = {
    "EX": EX,
    "DSD": DSD
};
