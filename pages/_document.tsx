import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class OdontovidaDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="author" content="waltbon" />
                    <meta name="keywords" content="Responsive, HTML5 Template, Jthemes, One Page, Landing, Medical, Health, Healthcare, Doctor, Clinic, Care, Hospital" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" sizes="152x152" href="images/apple-touch-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="images/apple-touch-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="images/apple-touch-icon-76x76.png" />
                    <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />

                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" />

                    <link href="/css/bootstrap.min.css" rel="stylesheet" />

                    <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" rel="stylesheet" crossOrigin="anonymous" />
                    <link href="/css/flaticon.css" rel="stylesheet" />

                    <link href="/css/menu.css" rel="stylesheet" />
                    <link id="effect" href="/css/dropdown-effects/fade-down.css" media="all" rel="stylesheet" />
                    <link href="/css/magnific-popup.css" rel="stylesheet" />
                    <link href="/css/owl.carousel.min.css" rel="stylesheet" />
                    <link href="/css/owl.theme.default.min.css" rel="stylesheet" />
                    <link href="/css/animate.css" rel="stylesheet" />
                    <link href="/css/jquery.datetimepicker.min.css" rel="stylesheet" />
                    <link href="/css/style.css" rel="stylesheet" />
                    <link href="/css/responsive.css" rel="stylesheet" />

                </Head>
                <body>
                    <div id="loader-wrapper">
                        <div id="loader"><div className="loader-inner" />
                            {/* <img src="/images/logo.jpg" width="250px" alt=""/> */}
                        </div>
                    </div>

                    <Main />

                    <script src="/js/jquery-3.3.1.min.js"></script>
                    <script src="/js/bootstrap.min.js"></script>
                    <script src="/js/modernizr.custom.js"></script>
                    <script src="/js/jquery.easing.js"></script>
                    <script src="/js/jquery.appear.js"></script>
                    <script src="/js/jquery.stellar.min.js"></script>
                    <script src="/js/menu.js"></script>
                    {/* <script src="/js/sticky.js"></script> */}
                    <script src="/js/jquery.scrollto.js"></script>
                    <script src="/js/materialize.js"></script>
                    <script src="/js/owl.carousel.min.js"></script>
                    <script src="/js/jquery.magnific-popup.min.js"></script>
                    <script src="/js/imagesloaded.pkgd.min.js"></script>
                    <script src="/js/isotope.pkgd.min.js"></script>
                    <script src="/js/hero-form.js"></script>
                    <script src="/js/contact-form.js"></script>
                    <script src="/js/comment-form.js"></script>
                    <script src="/js/appointment-form.js"></script>
                    <script src="/js/jquery.datetimepicker.full.js"></script>
                    <script src="/js/jquery.validate.min.js"></script>
                    <script src="/js/jquery.ajaxchimp.min.js"></script>
                    <script src="/js/wow.js"></script>
                    <script src="/js/custom.js"></script>
                    <NextScript />
                </body>
            </Html>
        );
    }
}