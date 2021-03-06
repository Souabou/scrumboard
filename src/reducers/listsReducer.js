import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 6;

const initialState = [
    {
        title: "BACKLOG",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "Create User Stories"
            },
            {
                id: `card-${1}`,
                text: "j'ai pas d'idées de texte, c'est super"
            }
        ]
    },
    {
        title: "PLANNING",
        id: `list-${1}`,
        cards: [
            {
                id:`card-${2}`,
                text: "TO-DO tasks"
            },
            {
                id: `card-${3}`,
                text: "j'ai toujours pas d'idées de tâches, c'est dingue"
            },
            {
                id: `card-${4}`,
                text: "ça devient difficile d'avoir des idées qui viennent de nulle part, mon cerveau bouille"
            },
            {
                id: `card-${5}`,
                text: "need to debug rn arghhh ... wouhou I did it "
            }
        ]
    }

];

const listsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            listID += 1;
            return [...state, newList];
        
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            };
            cardID += 1;

            const newState = state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED:

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                // draggableId
                type
            } = action.payload;
            const newState = [...state];

            //dragging lists around
            if(type === "list") {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            //in the same list
            if(droppableIdStart === droppableIdEnd) {
                console.log("same list")
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            
            // other list

            if(droppableIdStart !== droppableIdEnd) {
                // find the list where drag happened
                const listStart = state.find(list => droppableIdStart === list.id);

                //pull out the card from the list
                const card = listStart.cards.splice(droppableIndexStart, 1);

                // find the list where drag ended
                const listEnd = state.find(list => droppableIdEnd === list.id);

                //put the card in the new list 
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState;

        default: 
            return state;
    }
};

export default listsReducer;