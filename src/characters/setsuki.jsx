import React from 'react';
import {CantCombo, Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import {EX, First} from '../editions.jsx';

const normalAttack = mkNormal(0.2);

const normalThrow = mkNormal(0.2, {
    damage: 6,
    comboPts: 3,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>6>AA',
    maxDamage: 29,
    goodCombo: (rank) => 't' + rank + '>4>5>6',
    goodDamage: 21,
});

export const setsuki = {
    theme: {
        // primary: #D68E42
        text: 'linear-gradient(#f6e6d5, #f6e6d5)',
        headshot: require('../images/setsuki.jpg'),
    },
    summary: {
        name: 'Setsuki',
        fullName: 'Setsuki Hiruki',
        title: 'Ninja Student',
        hitPoints: 70,
        maxCombo: 6,
        attackSpeed: <span>x.2 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.2 <ComboDetails points={3} max={3} kd={true}/></div>,
        throwDamage: 6,
        attacks: [2, 3, 4, 5, 6, 'J', 'Q', 'K', 'A'],
        throws: [7, 8, 9, 'T', 'K'],
        blocks: [6, 7, 8, 9],
        dodges: [2, 3, 4, 5, 'T'],
        innateAbilities: [
            {
                name: 'Speed of the Fox',
                text: (
                    'If you start the draw phase with 1 or 0 cards in hand, draw 5 cards '+
                    '(instead of 1) and you may hit back with a full combo if you dodge an ' +
                    'attack or Joker this turn.'
                ),
            },
        ],
        cardAbilities: [
            {
                rank: 7,
                name: 'Bag of Tricks',
                timing: 'End of Turn',
                text: <span>
                    If this is the only card in your hand, put up to three non-Joker
                    cards from your discard pile on top of your deck in any order,
                    then discard this card.
                </span>
            },
            {
                rank: 'T',
                name: 'Smoke Bomb',
                timing: 'Reaction',
                text: <span>
                    Discard two cards (and this card) to counter an ability.<br />
                 <i>(Prevent and undo the ability and the opponent discards the card if
                    played from hand. You can't counter Aces, Jokers or character cards.)</i>
                </span>
            },
        ],
    },
    attacks: [
        normalAttack(2, {maxCombo: '2>K++>6>AA', maxDamage: 36, goodCombo: '2>3>4>5>tK', goodDamage: 20}),
        normalAttack(3, {maxCombo: '3>K++>6>AA', maxDamage: 37, goodCombo: '3>4>5>6>tK', goodDamage: 24}),
        normalAttack(4, {maxCombo: '4>K++>6>AA', maxDamage: 38, goodCombo: '4>5>6>K+>5', goodDamage: 28}),
        normalAttack(5, {maxCombo: '5>K++>6>AA', maxDamage: 39, goodCombo: '5>6>K+>4>5', goodDamage: 28}),
        normalAttack(6, {maxCombo: '6>K++>6>AA', maxDamage: 40, goodCombo: '6>K+>3>4>5', goodDamage: 26}),
        {
            speed: 1.4, rank: 'J', name: 'Esper Dash', damage: 5, chip: 1,
            comboPts: 1, comboType: <Linker/>, maxCombo: 'J>K++>6>AA', maxDamage: 39,
            goodCombo: 'J>K+>3>4>5', goodDamage: 25,
        },
        {
            speed: 0.0, rank: 'Q', name: 'Ninpo Flash', pumpWith: '+X+X', damage: 1,
            pump: 4, chip: 1, comboPts: 3, comboType: <Starter/>, maxCombo: 'Q++>6>AA', maxDamage: 32,
            goodCombo: 'Q++>K+>6', goodDamage: 23,
        },
        {
            speed: 2.2, rank: 'K', name: 'Starlight Kick', pumpWith: '+X+X', damage: 5,
            pump: 3, chip: 2, comboPts: 2, comboType: <Linker/>, maxCombo: 'K++>K++>AA', maxDamage: 39,
            goodCombo: 'K++>4>5>6>J', goodDamage: 31,
        },
        {
            speed: 1.0, rank: 'A', pumpWith: '+A+A+A', name: 'Shuriken Hail', damage: 9,
            pump: 9, chip: 3, comboType: <CantCombo/>,
            maxCombo: 'A+++', maxDamage: 36, goodCombo: 'A++', goodDamage: '27',
        },
        {
            speed: 1.2, rank: 'AA', name: 'Surprise Gift', damage: 17, chip: 3,
            comboPts: 2, comboType: <Ender/>,
        },
    ],
    throws: [
        normalThrow(7),
        normalThrow(8),
        normalThrow(9),
        normalThrow('T'),
        {
            speed: 9.2, rank: 'K', name: 'Starlight Tumbler', damage: 6, comboPts: 2,
            comboType: <Ender/>, kd: true,
        },
    ],
};

setsuki.variants = {
    EX: Object.assign({}, setsuki, {
        summary: Object.assign({}, setsuki.summary, {
            name: <span>EX {setsuki.summary.name}</span>,
            edition: EX,
            innateAbilities: [
                {
                    name: 'Fox Frenzy',
                    text: <span>
                        If you start the draw phase with 5 or fewer cards in
                        hand, draw until you have 6 (instead of drawing just 1).
                        If you drew three or more cards this way, you may
                        dodge into a full combo this turn.
                    </span>
                },
            ],
            cardAbilities: setsuki.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Ninjaport Dash',
                    timing: 'During Combat',
                    text: <span>
                        If the opponent blocks or dodges this, next combat they can't
                        dodge and you can do mixup normals to them. Next combat,
                        your attacks are 1 speed faster, to a minimum of 0.0.
                    </span>
                },
            ]),
            dodges: setsuki.summary.dodges.concat(['D']),
        }),
    }),

    FirstEd: Object.assign({}, setsuki, {
        summary: Object.assign({}, setsuki.summary, {
            name: <span>1<sup>st</sup> Ed. {setsuki.summary.name}</span>,
            edition: First,
            innateAbilities: [
                {
                    name: 'Speed of the Fox',
                    text: <span>
                        At the beginning of the turn, if you have 1 or 0 cards in your hand,
                        draw 4 cards and you may hit back with a full combo if you dodge an
                        attack or Joker this turn. <i>(You still draw as usual during the draw phase.)</i>
                    </span>
                },
            ],
            cardAbilities: [
                {
                    rank: 7,
                    name: 'Bag of Tricks',
                    timing: null,
                    text: <span>
                        At the end of turn, if this is the only card in your hand, you may
                        put up to three non-Joker cards from your discard pile on top of
                        your deck in any order, then discard this card.
                    </span>
                },
                {
                    rank: 'T',
                    name: 'Smoke Bomb',
                    timing: null,
                    text: <span>
                        Discard this card and two other cards to counter the effect of any
                        ability except those on Aces or Jokers. <i>(Play this after the
                        opponent spends any activation costs, then prevent and undo that
                        entire ability. The opponent discards the ability card if it was
                        played from his hand.)</i>
                    </span>
                },
            ],
        }),
    }),
};
