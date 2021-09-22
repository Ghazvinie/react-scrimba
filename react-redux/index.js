import store from './redux/index';
import { changeCount } from './redux/count';
import {addFavieThing, removeFavieThing} from './redux/favoriteThings';
import {addYoutubeTitle, upvoteCount, downvoteCount} from './redux/youtubeVideo';

store.dispatch(changeCount(1));