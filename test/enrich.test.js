import {enrich} from '../src';

test('Enrich cards on empty list', () => {
    return enrich.enrichCards(
        [],
        () => {},
        () => {},
        () => {},
        () => {}
    )
        .then((items) => {
            expect(
                items
            ).toStrictEqual([]);
        })
});

test('Enrich cards on normal list', () => {
    return enrich.enrichCards(
        [
            {
                type: "type-1",
                card: "card-1"
            },
            {
                type: "type-2",
                card: "card-2"
            }
        ],
        (item) => {
            return item.type === "type-2"
        },
        (item) => {
            return item.card;
        },
        async () => {
            return [
                {
                    id: "card-1",
                    last4: "1234",
                },
                {
                    id: "card-2",
                    last4: "5678",
                }
            ];
        },
        (item, card) => {
            return {
                ...item,
                card: card
            }
        }
    )
        .then((items) => {
            expect(
                items
            ).toStrictEqual([
                {
                    type: "type-1",
                    card: "card-1"
                },
                {
                    type: "type-2",
                    card: {
                        id: "card-2",
                        last4: "5678",
                    }
                }
            ]);
        })
});