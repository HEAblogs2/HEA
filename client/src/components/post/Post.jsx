import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="https://img.freepik.com/vector-premium/mama-carinosa-abrazo-dos-ninos-pequenos-muestran-amor_160308-3641.jpg?w=1060" 
        alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
               <span className="postCat">Mother</span> 
               <span className="postCat">Child</span> 
            </div>
            <span className="postTitle">How to Support Mothers?.</span>
             <hr/>
             <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
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
  );
}
