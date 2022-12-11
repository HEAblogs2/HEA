import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">

        <img src="https://cdn.accentuate.io/391483293854/15173957288094/iStock-10177213261-v1603800780511.jpg?2121x1057"
          alt=""
          className="singlePostImg" />
        <h1 className="singlePostTitle">Emotional Health
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>

          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Eya</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        First of all, Mother is a word which fills everyone with emotions. 
        A Mother is certainly the most important human being in everyone’s life.
         Mother’s Love for her child certainly cannot be compared with anything.
          Her level of forgiveness is unmatchable. A Mother is capable of forgiving any wrongdoing.
           Mother is the most important woman in everyone’s life. 
           A mother sacrifices her happiness for her child. No one else can care for their kids the way a 
           Mother does.  A Mother is great and does not need anyone like me explaining that. 
        This essay on Mother is a small attempt to discover the greatness of a mother.
           </p>
      </div>
    </div>
  )
}
