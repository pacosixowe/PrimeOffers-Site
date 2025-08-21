import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>PrimeOffers Blog</title>
      </Head>
      <main style={{ maxWidth: "700px", margin: "auto", padding: "20px" }}>
        <h1>Welcome to PrimeOffers Blog</h1>
        <p>
          Here we share guides, deals, and tips to help you save more on your favorite products.
        </p>

        {/* --- Google AdSense ad block --- */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", margin: "20px 0" }}
          data-ad-client="ca-pub-XXXXXXXX"
          data-ad-slot="1234567890"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>
          {(adsbygoogle = window.adsbygoogle || []).push({})}
        </script>
        {/* --- End Ad Block --- */}

        <h2>Latest Post</h2>
        <p>
          Did you know you can combine coupons with cashback deals for extra savings?
          That’s just one of the ways PrimeOffers helps you stretch your budget.
        </p>

        <p>
          Stay tuned for more articles covering the best shopping hacks,
          money-saving tips, and special offers.
        </p>

        {/* Another Ad Unit between content */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", margin: "20px 0" }}
          data-ad-client="ca-pub-XXXXXXXX"
          data-ad-slot="0987654321"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>
          {(adsbygoogle = window.adsbygoogle || []).push({})}
        </script>
      </main>
    </>
  );
}
