import axios from "axios";
import * as constants from "./constants";
import {storage} from "./firebaseconf";


export const loadArticles= () => {
    return (dispatch) => {
        dispatch(loadArticlesStart());
        var jsonReference = storage.refFromURL('gs://pwa-poc-92538.appspot.com/bundle_v2_AP_2018-11-17_1542398451.json');
        jsonReference.getDownloadURL().then(url => {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    dispatch(successLoad(response.data));
                });
        });

    };
};

const loadArticlesStart = () => ({
    type: 'LOAD_ARTICLES_REQUEST'
});

const successLoad= data => ({
    type: 'LOAD_ARTICLES_SUCCESS',
    data : Array.from(data).reduce( (lis, article) => {
        if(article.type === "article"){
            let newArticle = {
                ...article,
                headline: article.headline.slice(5),
                read: false
            };
            lis.push(newArticle);
        }
        return lis
    }, []),
    brief: {
        id: data[0].nid,
        text: data[0].headlineSummary
    },
    briefsList: Array.from(data).filter(article => article.type === "gobbet_page")
});

export function loadArticle(article){
    return {
        type: constants.LOAD_ARTICLE,
        article: article
    }
}