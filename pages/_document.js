import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0"/>
        </Head>
        <body className="custom_class" style={{backgroundColor: "black"}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;