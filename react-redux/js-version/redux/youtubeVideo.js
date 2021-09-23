function addYoutubeTitle(title) {
    return {
        type: 'ADD_YOUTUBE_TITLE',
        payload: title
    };
}

function upvoteCount(num) {
    return {
        type: 'UPVOTE_YOUTUBE_COUNT',
        payload: num
    };
}

function downvoteCount(num) {
    return {
        type: 'DOWNVOTE_YOUTUBE_COUNT',
        payload: num
    };
}

const youtubeInitialState = {
    title: "",
    viewCount: 0,
    votes: {
        up: 0,
        down: 0
    }
}

function youtubeReducer(youtubeVideo = youtubeInitialState, action) {
    switch (action.type) {
        case 'ADD_YOUTUBE_TITLE':
            return {
                ...youtubeVideo,
                title: action.payload
            }
        case 'UPVOTE_YOUTUBE_COUNT':
            return {
                ...youtubeVideo,
                votes: {
                    ...youtubeVideo.votes,
                    up: youtubeVideo.votes.up + action.payload
                }
            };
        case 'DOWNVOTE_YOUTUBE_COUNT':
            return {
                ...youtubeVideo,
                votes: {
                    ...youtubeVideo.votes,
                    down: youtubeVideo.votes.down + action.payload
                }
            };
    }
}

export {
    addYoutubeTitle,
    upvoteCount,
    downvoteCount,
    youtubeReducer
};