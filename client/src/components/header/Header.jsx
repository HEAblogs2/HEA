import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">HEA</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img 
        className="headerImg" 
        src="https://wallpaperaccess.com/full/1424308.jpg"
         alt="" 
         />
    </div>
  );
}
