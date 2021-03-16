const initialState = [
    {
        title: "BACKLOG",
        id: 0,
        cards: [
            {
                id:0,
                text: "Create User Stories"
            },
            {
                id: 1,
                text: "j'ai pas d'idées de texte, c'est super"
            }
        ]
    },
    {
        title: "PLANNING",
        id: 0,
        cards: [
            {
                id:0,
                text: "TO-DO tasks"
            },
            {
                id: 1,
                text: "j'ai toujours pas d'idées de tâches, c'est dingue"
            },
            {
                id: 2,
                text: "ça devient difficile d'avoir des idées qui viennent de nulle part, mon cerveau bouille"
            }
        ]
    }

];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

export default listsReducer;