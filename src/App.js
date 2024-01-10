import React from 'react';

// スタイル定義
const styles = {
  main: {
    width: 'calc(100% - 32px)',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '40px',
    paddingBottom: '40px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  cell: {
    border: '1px solid black',
    padding: '8px',
  },
};

// App コンポーネント
const App = () => {
  return (
    <div style={styles.main}>
      <h1>ペットの気持ちAI</h1>
      <h2>【特定商取引法に基づく表記】</h2>
      <p>
        当社が提供する有償のサービス、アプリケーション及びコンテンツ（以下、「商品等」といいます）に関する取引条件は、以下のとおりです。
      </p>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.cell}>販売事業者</td>
            <td style={styles.cell}>
              株式会社 GinTrick
              <br />
              https://gintrick.com/
            </td>
          </tr>
          <tr>
            <td style={styles.cell}>運営責任者</td>
            <td style={styles.cell}>代表取締役 米原宏郎</td>
          </tr>
          <tr>
            <td style={styles.cell}>住所</td>
            <td style={styles.cell}>
              〒150-0001
              <br />
              東京都渋谷区神宮前六丁目２３番４号 桑野ビル２階
            </td>
          </tr>
          <tr>
            <td style={styles.cell}>お問い合わせ先</td>
            <td style={styles.cell}>
              お問い合わせフォームは
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSd4u1Tgp_ifVTbOCUiPkm_aGVdR3E_M_JRizeWCvHABxPAQKQ/viewform'>
                コチラ
              </a>
              までご連絡ください。
              <br />
              ※営業時間は平日10:00～19:00です。
              <br />
              ※定休日は土曜、日曜、祝日、年末年始（12/29～1/3）となります。
              <br />
              ※弊社電話番号はお客様からのご要望に基づき遅滞なく電子メールにて通知いたします。
            </td>
          </tr>
          <tr>
            <td style={styles.cell}>販売価格</td>
            <td style={styles.cell}>
              商品等によって異なります。商品等の購入ページでご確認いただけます。
            </td>
          </tr>
          <tr>
            <td style={styles.cell}>商品代金以外の必要料金</td>
            <td style={styles.cell}>
              通信料金
              <br />
              ※通信料金は、お客様がご利用の通信契約により異なります。
            </td>
          </tr>
          <tr>
            <td style={styles.cell}>お支払い方法・時期</td>
            <td style={styles.cell}>
              iOS端末をご利用の方はApp Store、Android端末をご利用の方はGoogle
              Playでのお支払いになります。
              <br />
              {/* Stripeを利用するときにコメントアウト */}
              {/* その他ストライプジャパン株式会社が提供する決済システム「Stripe」など商品等の購入ページにて、利用可能な決済方法がご確認いただけます。
              <br /> */}
              各決済方法の利用条件、引き落とし時期等は、各社が定める規約によるものとします。
            </td>
          </tr>
          <tr>
            <td style={styles.cell}>引渡時期</td>
            <td style={styles.cell}>
              商品等は、お支払手続き完了後、すぐにご利用いただけます。
            </td>
          </tr>
          <tr>
            <td style={styles.cell}>申込期間に関する定め</td>
            <td style={styles.cell}>
              商品等によっては、販売期間を限定又は販売点数を制限する場合がございます。その場合は、商品等の購入ページに表示いたします。
            </td>
          </tr>
          <tr>
            <td style={styles.cell}>返品・交換</td>
            <td style={styles.cell}>購入後の返品やキャンセルはできません。</td>
          </tr>
          <tr>
            <td style={styles.cell}>動作環境</td>
            <td style={styles.cell}>
              商品等が動作するAndroid端末、iOS端末のいずれかが必要です。推奨する動作環境については、以下のとおりです。
              <br />
              ios: iOS 16.2以上
              <br />
              android: Android 13以上
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
