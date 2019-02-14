// this function will just work on comments from the specific post using postId
// and add to the comments list
function postComments(state=[],action){
  switch(action.type){
    case 'ADD_COMMENT':
    // return the new sate with the new comment
    console.log(action);
      return [...state,{
          user: action.author,
          text: action.comment
      }];
    case 'REMOVE_COMMENT':
    console.log('removing comment');
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1)
      ];
    default:
        return state;
  }
  return state;
}

function comments(state=[],action){
  if(typeof action.postId !== 'undefined'){
    return{
      // return the current state,
      ...state,
      //overwrite this post with a new comment
      [action.postId]: postComments(state[action.postId],action)
    }
  }
  return state;
}

export default comments;
