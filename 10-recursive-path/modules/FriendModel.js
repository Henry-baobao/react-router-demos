const Data = [{
        id: 0,
        name: "Michelle",
        friends: [1, 2, 3]
    },
    {
        id: 1,
        name: "Sean",
        friends: [0, 3]
    },
    {
        id: 2,
        name: "Kim",
        friends: [0, 1, 3]
    },
    {
        id: 3,
        name: "David",
        friends: [1, 2]
    }
];

export function findById(id) {
    return Data.find(p => p.id === id);
}