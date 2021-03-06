import React from 'react';
import {Note, Icon} from '../note.jsx';
import {CantCombo, Ender, Linker, Starter, ComboDetails} from '../combo.jsx';
import {mkNormal} from '../move.jsx';
import styled from 'styled-components';
import {EX, First} from '../editions.jsx';

const normalAttack = mkNormal(0.2);

const normalThrow = mkNormal(0.8, {
    damage: 8,
    comboPts: 2,
    comboType: <Starter/>,
    kd: true,
    maxCombo: (rank) => 't' + rank + '>J+',
    maxDamage: 24,
    goodCombo: (rank) => 't' + rank + '>8',
    goodDamage: 16,
});

const dragon = <Note id="dragonform" text="Requires Dragon Form" icon={<Icon>{'\uD83D\uDC32'}</Icon>} />;

const Dragon = styled.span`
    color: #126d1c;
    font-weight: bold;
`;

export const midori = {
    theme: {
        // primary: #78BD52
        text: 'linear-gradient(#e2f1da, #e2f1da)',
        headshot: require('../images/midori.jpg'),
    },
    summary: {
        name: 'Midori',
        fullName: 'Master Midori',
        title: 'Mentor Dragon',
        hitPoints: 90,
        maxCombo: 3,
        attackSpeed: <span>x.2 <i>(x = card rank)</i></span>,
        throwSpeed: <div>x.8 <ComboDetails points={2} max={2} kd={true}/></div>,
        throwDamage: 8,
        attacks: [4, 5, 6, 7, 8, 'J', 'Q', 'A'],
        throws: [2, 3, 4, 5, 9, 'T', 'K', 'A'],
        blocks: [2, 3, 6, 7, 8],
        dodges: [9, 'T'],
        innateAbilities: [
            {
                name: 'Aspect of the Dragon',
                text: <span>
                    Your Dragon attacks can not be dodged by normal dodges.
                    Whenever you block an attack or Joker while in Dragon Form,
                    you may return a non-Joker card from your discard pile to
                    your hand instead of drawing a card.<br />
                    <i>(You can only play Dragon moves while in Dragon Form.)</i>
                </span>
            },
            {
                name: 'Defense Mastery',
                text: 'Opponents don\'t draw when you block their normal attacks.',
            },
        ],
        cardAbilities: [
            {
                rank: 2,
                name: 'Dragon Form',
                timing: 'Draw Phase',
                text: (
                    'Ongoing. You can play Dragon moves. Discard this if you get thrown or you ' +
                    'combat-reveal a non-Dragon attack/throw.'
                )
            },
            {
                rank: 'T',
                name: 'Glimpse of the Dragon',
                timing: 'Combat Reveal',
                text: <span>
                    If you combat-revealed a face card while not in Dragon Form,
                    rotate it 180 degrees to play the Dragon Form version of your
                    move. <i>(Aces aren't face cards.)</i>
                </span>
            },
        ],
    },
    attacks: [
        normalAttack(4, {maxCombo: '4>5>J+', maxDamage: 25, goodCombo: '4>5>6', goodDamage: 15}),
        normalAttack(5, {maxCombo: '5>6>J+', maxDamage: 27, goodCombo: '5>6>7', goodDamage: 18}),
        normalAttack(6, {maxCombo: '6>7>J+', maxDamage: 29, goodCombo: '6>7>8', goodDamage: 21}),
        normalAttack(7, {maxCombo: '7>8>J+', maxDamage: 31, goodCombo: '7>8>J', goodDamage: 23}),
        normalAttack(8, {maxCombo: '8>J+', maxDamage: 24, goodCombo: '8>Q', goodDamage: 18}),
        {
            speed: 2.4, rank: 'J', pumpWith: '+J', name: 'Whirlwind', damage: 8, pump: 8, chip: 2,
            comboPts: 1, comboType: <Ender/>, maxCombo: 'J+', maxDamage: 16,
        },
        {
            speed: 2.4, rank: 'J', rankDisplay: <Dragon>J</Dragon>, name: <Dragon>Toxic Breath</Dragon>, damage: 9, chip: 2, comboPts: 1, comboType: <Starter/>,
            maxCombo: 'dJ>AA', maxDamage: 29, goodCombo: 'dJ>7>8', goodDamage: 24, notes: dragon,
        },
        {speed: 1.2, rank: 'Q', name: 'Rising Mountain', damage: 10, chip: 1, comboPts: 2, comboType: <Ender/>},
        {
            speed: 0.6, rank: 'Q', rankDisplay: <Dragon>Q</Dragon>, name: <Dragon>Dragon Mountain</Dragon>, damage: 14, chip: 2, comboPts: 2, comboType: <Linker/>,
            maxCombo: 'dQ>J+', maxDamage: 30, goodCombo: 'dQ>8', goodDamage: 22, notes: dragon,
        },
        {speed: 1.2, rank: 'AA', name: 'Wrath of Earth', damage: 20, chip: 2, comboType: <CantCombo/>},
    ],
    throws: [
        normalThrow(2),
        normalThrow(3),
        normalThrow(4),
        normalThrow(5),
        normalThrow(9),
        normalThrow('T'),
        {speed: 4.4, rank: 'K', name: 'Rushing River', damage: 12, comboType: <CantCombo/>, comboPts: null},
        {
            speed: 1.8, rank: 'K', rankDisplay: <Dragon>K</Dragon>, name: <Dragon>Talon Swoop</Dragon>, damage: 17, comboType: <CantCombo/>,
            comboPts: null, notes: dragon,
        },
        {
            speed: 0.0, rank: 'AA', rankDisplay: <Dragon>AA</Dragon>, pumpWith: '+A+A',
            name: <Dragon>Final Dragon Buster</Dragon>, damage: 20,
            pump: 16, comboType: <CantCombo/>, comboPts: null,
            maxCombo: 'tAA++', maxDamage: 52, goodCombo: 'tAA+', goodDamage: 36, notes: dragon,
        },
    ],
};

midori.variants = {
    EX: Object.assign({}, midori, {
        summary: Object.assign({}, midori.summary, {
            name: <span>EX {midori.summary.name}</span>,
            edition: EX,
            innateAbilities: [
                {
                    name: 'Essense of the Dragon',
                    text: <span>
                        Your Dragon attacks can not be dodged.<br />
                        <i>(You can only play Dragon moves while in Dragon Form.)</i><br />
                        Whenever you block an attack or Joker, you may return a non-
                        Joker card from your discard pile (in addition to drawing from
                        your block).
                    </span>
                },
                {
                    name: 'Defense Mastery',
                    text: 'Opponents don\'t draw when you block their normal attacks.',
                },
            ],
            cardAbilities: midori.summary.cardAbilities.concat([
                {
                    rank: 'D',
                    name: 'Eight-Point Counter',
                    timing: 'During Combat',
                    text: <span>
                        You can play this while knocked down. If you dodge an attack
                        or Joker with this, don't play a follow-up card. Your opponent
                        takes 8 damage and is knocked down, then you may search
                        your deck or discard pile for an Ace and put it in your hand.
                    </span>
                },
            ]),
            dodges: midori.summary.dodges.concat(['D']),
        }),
    }),

    FirstEd: Object.assign({}, midori, {
        summary: Object.assign({}, midori.summary, {
            name: <span>1<sup>st</sup> Ed. {midori.summary.name}</span>,
            edition: First,
            innateAbilities: [
                {
                    name: 'Aspect of the Dragon',
                    text: <span>
                        Your Dragon attacks can not be dodged. This ability can not be countered.<br />
                        <i>(You can only play Dragon moves while in Dragon Form.)</i>
                    </span>
                },
            ],
            cardAbilities: [
                {
                    rank: 2,
                    name: 'Dragon Form',
                    timing: null,
                    text: <span>
                        After the draw phase, you may play this card face up on the table to enter
                        Dragon Form (so that you can play Dragon abilities). Put this card in the
                        discard pile if you are thrown or if you reveal a non-Dragon attack or
                        non-Dragon throw in combat.
                    </span>
                },
                {
                    rank: 'T',
                    name: 'Glimpse of the Dragon',
                    timing: null,
                    text: <span>
                        After combat cards are revealed, if you played a face card (not an Ace)
                        while not in Dragon Form, then you may discard this card. Rotate your
                        combat card 180 degrees to play the Dragon Form version of your
                        attack or throw.
                    </span>
                },
            ],
        }),
        throws: [
            normalThrow(2),
            normalThrow(3),
            normalThrow(4),
            normalThrow(5),
            normalThrow(9),
            normalThrow('T'),
            {speed: 4.4, rank: 'K', name: 'Rushing River', damage: 12, comboType: <CantCombo/>, comboPts: null},
            {
                speed: 2.2, rank: 'K', rankDisplay: <Dragon>K</Dragon>, name: <Dragon>Talon Swoop</Dragon>, damage: 17, comboType: <CantCombo/>,
                comboPts: null, notes: dragon,
            },
            {
                speed: 0.0, rank: 'AA', rankDisplay: <Dragon>AA</Dragon>, pumpWith: '+A+A',
                name: <Dragon>Final Dragon Buster</Dragon>, damage: 20,
                pump: 16, comboType: <CantCombo/>, comboPts: null,
                maxCombo: 'tAA++', maxDamage: 52, goodCombo: 'tAA+', goodDamage: 36, notes: dragon,
            },
        ],
    }),
};
