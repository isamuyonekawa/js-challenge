# JavaScript入門(任意の宿題)

#### あなた 今買い物に来ています。 これから購入する商品 合計金額に応じて、手持ち 割引券を何枚使える かを教えてくれ るプログラムを JavaScriptで実装してください。

割引券 種類
- 3種類ある:1,000円割引券, 500円割引券, 100円割引券

所与 条件
- 購入する商品 合計金額が5,000円以上 場合 み利用可能
- 支払金額 = 購入する商品 合計金額 - 利用する割引券 合計金額
- できるだけ支払金額が少なくなるようにしてください
- 利用する割引券 合計金額 、購入する商品 合計金額を越えないようにしてください


ヒント 購入する商品 合計金額と手持ち 割引券 枚数を引数として渡すメソッドを実装しましょう。
- 例:購入する商品 合計金額が20,000円で、1,000円割引券1枚、500円割引券2枚、100円割引券5 枚を持っている場合 式
メソッド名(20000, [ 1, 2, 5])
