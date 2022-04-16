import Link from "next/link";

const Article = ({ imgUrl, date, text, path }) => (
  <div className="germ__blog-container_article">
    <div className="germ__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="germ__blog-container_article-content">
      <div>
        <h3>{text}</h3>
        <p>{date}</p>
      </div>
      <Link href={`/germies/${path}`}>
        <a>
          <button>See Details</button>
        </a>
      </Link>
    </div>
  </div>
);

export default Article;
