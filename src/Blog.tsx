import { DefaultProps } from "./DefaultProps";



export const Blog: React.FC<DefaultProps> = ({ visible }) => {
    let activeClassName = visible === 'Blog' ? 'active' : '';
    return <article className={`blog ${activeClassName}`} data-page="blog">

        <header>
            <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

            <ul className="blog-posts-list">

                <li className="blog-post-item">
                    <a href="#">

                        <figure className="blog-banner-box">
                            <img src="./assets/images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy" />
                        </figure>

                        <div className="blog-content">

                            <div className="blog-meta">
                                <p className="blog-category">Design</p>

                                <span className="dot"></span>

                                <time dateTime="2022-02-23">Fab 23, 2022</time>
                            </div>

                            <h3 className="h3 blog-item-title">Design conferences in 2022</h3>

                            <p className="blog-text">
                                Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                            </p>

                        </div>

                    </a>
                </li>

            </ul>

        </section>

    </article>;
};
