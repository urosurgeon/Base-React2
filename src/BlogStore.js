/**
 * Created by ahmadm.alshammari on 5/11/17.
 */
import {ReduceStore} from 'flux/utils';
import dispatcher from './BlogDispatcher';
import {Map} from "immutable";

class BlogStore extends ReduceStore {

    getInitialState() {
        return Map({
            articles: [],
            // searchstr: '',

        })
            ;
    }

    reduce(state, action) {
        return state

    }

}


export default new BlogStore(dispatcher);