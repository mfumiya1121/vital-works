export default function LegalPage() {
  return (
    <main className="min-h-dvh bg-white text-slate-800">
      <section className="mx-auto max-w-3xl px-4 py-16 text-sm leading-relaxed">
        <h1 className="text-2xl font-bold mb-8">プライバシーポリシー</h1>
        <p className="mb-6">
          Vital Works（以下「当チーム」といいます。）は、提供するサービスにおける個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
        </p>
        {/* 1. 事業者情報 */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">1. 事業者情報</h2>
        <p className="mb-1">名称：Vital Works</p>
        <p className="mb-1">形態：産業保健師・心理士・トレーナーによる専門チーム</p>
        <p className="mb-1">
        連絡先：
          <a
            href="#contact" // ★ フォームへのリンクに変更
            className="underline underline-offset-2"
            > 
            お問い合わせフォーム
            </a>
        </p>
       {/*
        <p className="mt-3 mb-6 text-xs text-slate-500">
          ※正式な法人化を行った場合には、名称や所在地を適宜更新します。
        </p>
        */}

        {/* 2. 取得する情報 */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">2. 取得する情報</h2>
        <p className="mb-3">
          当チームは、以下の情報を取得することがあります。
        </p>
        <h3 className="mt-4 mb-2 font-semibold">
          （1）お問い合わせフォーム等でご提供いただく情報
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>氏名</li>
          <li>会社名・部署名・役職（任意）</li>
          <li>メールアドレス</li>
          <li>ご相談内容その他ご記入いただいた情報</li>
        </ul>

        <h3 className="mt-4 mb-2 font-semibold">
          （2）アクセス時に自動的に送信される情報
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>利用しているブラウザや端末の種類</li>
          <li>IPアドレス</li>
          <li>リファラ（アクセス元ページ）</li>
          <li>クッキー（Cookie）等を用いて取得されるアクセス情報</li>
        </ul>
        {/*
        <p className="mt-2 mb-6 text-xs text-slate-500">
          ※今後、アクセス解析ツールや外部サービスを導入した場合には、その旨および取得項目を本ポリシーに追記します。
        </p>
        */}

        {/* 3. 個人情報の利用目的 */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          3. 個人情報の利用目的
        </h2>
        <p className="mb-3">
          当チームは、取得した個人情報を以下の目的で利用します。
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-1">
          <li>お問い合わせへの回答、面談・打ち合わせ等の調整のため</li>
          <li>当チームが提供するサービスの案内・提案のため</li>
          <li>契約の締結・履行および関連する事務手続きのため</li>
          <li>サービス品質向上・企画立案・検討のための分析のため</li>
          <li>法令に基づく対応、またはそれに付随する業務のため</li>
        </ol>
        <p className="mb-6">
          上記の目的の範囲外で利用する必要が生じた場合は、法令により認められる場合を除き、あらかじめ本人の同意を得た上で行います。
        </p>
        {/* 4. 利用目的の変更 */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          4. 利用目的の変更
        </h2>
        <p className="mb-6">
          利用目的を変更する場合は、変更前の目的と関連性を有すると合理的に認められる範囲内で行い、その内容を本ポリシーの変更等により公表します。
        </p>

        {/* 5. 個人情報の第三者提供 */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          5. 個人情報の第三者提供
        </h2>
        <p className="mb-3">
          当チームは、次の場合を除き、あらかじめ本人の同意を得ることなく個人情報を第三者に提供しません。
        </p>
        <ol className="list-decimal pl-6 mb-6 space-y-1">
          <li>法令に基づく場合</li>
          <li>
            人の生命、身体または財産の保護のために必要であり、本人の同意を得ることが困難な場合
          </li>
          <li>
            公衆衛生の向上または児童の健全な育成の推進のために特に必要であり、本人の同意を得ることが困難な場合
          </li>
          <li>
            国の機関もしくは地方公共団体等が法令の定める事務を遂行するうえで協力が必要な場合であって、本人の同意取得が当該事務の遂行に支障を及ぼすおそれがある場合
          </li>
          <li>
            利用目的の達成に必要な範囲で、個人情報の取扱いの全部または一部を委託する場合
          </li>
          <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
        </ol>
        {/* 6. 業務委託について */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          6. 業務委託について
        </h2>
        <p className="mb-6">

          当チームは、サービス提供や問い合わせ対応等に必要な範囲で、サーバー事業者、メールサービス、フォームサービス等の外部事業者に個人情報の取り扱いを委託することがあります。この場合、委託先に対して必要かつ適切な監督を行います。
        </p>

        {/* 7. 共同利用について */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          7. 共同利用について
        </h2>
        <p className="mb-3">
          当チームは、以下のとおり個人情報を共同利用することがあります。
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>共同利用する者の範囲：Vital Works に所属するメンバー（産業保健師、心理士、トレーナー）</li>
          <li>共同利用する項目：お問い合わせフォーム等で取得した情報一式</li>
          <li>共同利用の目的：第3条に定める利用目的の範囲内</li>
          <li>共同利用の管理責任者：Vital Works 代表（または共同代表者）</li>
        </ul>
        {/*
        <p className="mt-2 mb-6 text-xs text-slate-500">
          ※共同代表体制が正式に決まった段階で、氏名を明記する形に更新してください。
        </p>
        */}

        {/* 8. 安全管理措置 */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          8. 安全管理措置
        </h2>
        <p className="mb-6">
          当チームは、取り扱う個人情報の漏えい、滅失又はき損の防止その他の安全管理のために、以下のような措置を講じます。
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>アクセス権限の管理</li>
          <li>パスワード管理等による外部からの不正アクセス防止</li>
          <li>個人情報を取り扱う機器・クラウドサービスの適切な管理</li>
          <li>必要に応じたメンバーへの教育・啓発</li>
        </ul>
        <p className="mt-2 mb-6 text-xs text-slate-500">
          安全管理措置の詳細については、法令の求めに応じて公表または回答します。
        </p>

        {/* 9. 開示・訂正・利用停止等 */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          9. 個人情報の開示・訂正・利用停止等の請求
        </h2>
        <p className="mb-3">
          本人から、当チームが保有する個人情報の「開示・訂正・追加・削除・利用停止」等のご請求があった場合には、法令の定めに従い、適切に対応します。
        </p>
        <p className="mb-6">
          ご請求の際は、本人確認のための情報のご提供をお願いする場合があります。
        </p>
        <p className="mb-6">
          【受付窓口】<br />
        <a
            href="#contact" // ★ フォームへのリンクに変更
            className="underline underline-offset-2"
            > 
            お問い合わせフォーム
            </a>
        </p>

        {/* 10. Cookie */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          10. Cookie（クッキー）等の利用について
        </h2>
        <p className="mb-3">
          当サイトでは、以下の目的でCookieその他類似の技術を利用する場合があります。
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>サイトの利用状況の把握・サービス改善のため</li>
          <li>フォーム送信等、サイトの基本機能を提供するため</li>
        </ul>
        <p className="mb-3">
          Cookieによって取得される情報には、単体では特定の個人を識別できない情報が含まれますが、他の情報と組み合わせることで個人を識別し得る場合には、個人情報として適切に取り扱います。
        </p>
        <p className="mb-6">
          ブラウザの設定によりCookieの受け入れを拒否することも可能ですが、その場合サイトの一部機能がご利用いただけないことがあります。
        </p>
        {/*
        <p className="mt-2 mb-6 text-xs text-slate-500">
          ※Google アナリティクス等を導入した場合は、そのサービス名・提供者・オプトアウト方法を追記することをおすすめします。
        </p>
        */}

        {/* 11. 免責事項 */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">11. 免責事項</h2>
        <p className="mb-3">
          以下の場合、第三者によって個人情報が取得されたことに関して、当チームは責任を負いません。
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>
            利用者ご本人が当サイト上の機能または別の手段を用いて第三者に個人情報を開示した場合
          </li>
          <li>
            利用者が当サイトに入力した情報等により、偶然本人が特定された場合
          </li>
          <li>
            当サイトからリンクされている外部サイトにおいて、利用者から個人情報が提供された場合
          </li>
        </ul>

        {/* 12. 法令遵守と見直し */}
        <h2 className="mt-10 mb-3 text-lg font-semibold">
          12. 法令遵守とプライバシーポリシーの見直し
        </h2>
        <p className="mb-6">
          当チームは、個人情報保護法その他の関係法令およびガイドラインを遵守するとともに、本ポリシーの内容を継続的に見直し、必要に応じて改善を行います。本ポリシーを変更する場合は、当サイト上での掲載により公表し、変更後の内容は掲載時点から適用されます。
        </p>

        {/* 13. お問い合わせ窓口 */}

        <h2 className="mt-10 mb-3 text-lg font-semibold">
          13. お問い合わせ窓口
        </h2> 
        <p className="mb-4">
          本ポリシーおよび個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
        </p>
        <p className="mb-6">
          VITAL WORKS
          <br />
        　連絡先：
         <a
            href="#contact" // ★ フォームへのリンクに変更
            className="underline underline-offset-2"
            > 
            お問い合わせフォーム
          </a>
        </p>
        <p className="mt-8 text-xs text-slate-500">
          制定日：2025年12月6日
          <br />
          最終改定日：2025年12月6日
        </p>
      </section>
    </main>
  );
}