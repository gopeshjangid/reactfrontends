import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';

export default function Document() {

   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      function Tawk(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/622c1c331ffac05b1d7e3176/1ftu4sckk';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      }

      useEffect(()=>{
        Tawk();
      },[]);
  return (
    <Html lang="en">
      <Head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link
      rel="icon"
      type="image/png"
      href="/writer/img/logo/gp-writer-loader.png"
      sizes="16x16"
    />

    <script type="text/babel" src="writer/js/javascript.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&amp;display=swap"
      rel="stylesheet"
    />
    <script id="react-dotenv" src="./env.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
      type="text/javascript"
      src="https://checkout.razorpay.com/v1/razorpay.js"
    ></script>
      </body>
    </Html>
  )
}
