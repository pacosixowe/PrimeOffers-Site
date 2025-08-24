// pages/blog.js
import Head from "next/head";

export default function Blog() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <Head>
        {/* ✅ Replace with your AdSense client ID */}
        <<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8805044662576958"
     crossorigin="anonymous"></script>
      </Head>

      <h1>Welcome to Our Blog</h1>
      <p>Stay updated with the latest news, tips, and insights.</p>

      {/* ✅ Top banner ad */}
      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
      </div>

      {/* Example Blog Posts */}
      <div style={{ marginTop: "2rem" }}>
        <article style={{ marginBottom: "2rem" }}>
          <h2>🚀 First Post</h2>
          <p>This is our very first blog post! More content coming soon.</p>
        </article>

        {/* ✅ Inline ad between posts */}
        <div style={{ margin: "2rem 0", textAlign: "center" }}>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
            data-ad-slot="9876543210"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        </div>

        <article style={{ marginBottom: "2rem" }}>
          <h2>🔥 Why Blogging Helps SEO</h2>
          <p>Publishing consistent content helps your site rank better on Google.</p>
        </article>

        <article>
          <h2>💡 How to Monetize with AdSense</h2>
          <p>Once your blog is live, you can place AdSense ads here for revenue.</p>
        </article>
      </div>

      {/* ✅ Footer ad */}
      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
          data-ad-slot="2468135790"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
      </div>
    </div>
  );
}
