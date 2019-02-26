import * as constants from "./constants";

const list = {
    loading: false,
    articlesList: [],
    worldBrief: {
        id: 0,
        text: ""
    },
    briefsList: []
};
export function  ListReducer(state = list , action) {
    switch (action.type) {
        case constants.LOAD_ARTICLES_REQUEST:
            return {...state, loading: true};
        case constants.LOAD_ARTICLES_SUCCESS:
            return {...state,
                loading: false,
                articlesList : action.data,
                worldBrief: action.brief,
                briefsList: action.briefsList,
            };
        case constants.LOAD_ARTICLES_ERROR:
            return state;
        default:
            return state;
    }
}


const article ={
    id: 0,
    title: "",
    content: "",
    read: false
};
export function ArticleReducer( state = article, action) {
    switch (action.type) {
        case  constants.LOAD_ARTICLE:
            return {...state, id: action.article.id, title: action.article.title, content: action.article.content, read: true};
        case constants.ARTICLE_CLOSED:
            return state = article;
        default:
            return state;
    }
}
