// increment likes
export function increment(index){
  return{
    type:'INCREMENT_LIKES',
    index
  }
}
// Add comment to specific post
export function addComment(postId, author,comment){
  console.log("dispatching add comment!!!")
  return{
    type: 'ADD_COMMENT',
    postId,//key value same so other wise postId:postId
    author,
    comment
  }
}
// Remove comment from specific post
export function removeComment(postId,i){
  return{
    type:'REMOVE_COMMENT',
    postId,
    i // i is the index of comments
  }
}
