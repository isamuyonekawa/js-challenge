
/*手持ち割引券を何枚使えるか？*/
function use_tickets_count(total, tickets){
  let sum = total;
  let thousand_tickets     = 0;
  let five_hundred_tickets = 0;
  let hundred_tickets      = 0;
  const THOUSAND    = 1000;
  const FIVEHUNDRED = 500;
  const HUNDRED     = 100;
  for(let x=0; x<tickets[0]; x++){
    if(sum < THOUSAND){
      break;
    }else{
      sum -= THOUSAND;
      thousand_tickets += 1;
    }
  }

  for(let y=0; y<tickets[1]; y++){
    if(sum < FIVEHUNDRED){
      break;
    }else{
      sum -= FIVEHUNDRED;
      five_hundred_tickets += 1;
    }
  }

  for(let z=0; z<tickets[2]; z++){
    if(sum < HUNDRED){
      break;
    }else{
      sum -= HUNDRED;
      hundred_tickets += 1;
    }
  }
  return `使用できる割引券は、1000円割引${thousand_tickets}枚、500円割引${five_hundred_tickets}枚、100円割引${hundred_tickets}枚です。`;
}


/*支払金額*/
function payment(total, tickets){
  let sum = total;
  const THOUSAND    = 1000;
  const FIVEHUNDRED = 500;
  const HUNDRED     = 100;
  for(let x=0; x<tickets[0]; x++){
    if(sum < THOUSAND){
      break;
    }else{
      sum -= THOUSAND;
    }
  }

  for(let y=0; y<tickets[1]; y++){
    if(sum < FIVEHUNDRED){
      break;
    }else{
      sum -= FIVEHUNDRED;
    }
  }

  for(let z=0; z<tickets[2]; z++){
    if(sum < HUNDRED){
      break;
    }else{
      sum -= HUNDRED;
    }
  }
  return `割引後の支払金額は${sum}円です。`;
}


function message(total, tickets){
  if(total >= 5000){
    console.log(use_tickets_count(total, tickets));
    console.log(payment(total, tickets));
  }else{
    console.log('使用できる割引券はありません。');
    console.log(`支払金額は${total}です。`);
  }
}

message(6700, [ 2, 3, 3]);



/*
あなた 今買い物に来ています。 これから購入する商品 合計金額に応じて、手持ち 割引券を何枚使える かを教えてくれ るプログラムを Java cript で実装してください。

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
*/
