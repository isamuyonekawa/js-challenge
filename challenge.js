
//手持ち割引券を何枚使えるか？
function use_tickets_count(total, tickets){
  let sum = total;
  let thousand_tickets     = 0;
  let five_hundred_tickets = 0;
  let hundred_tickets      = 0;
  const THOUSAND    = 1000;
  const FIVE_HUNDRED = 500;
  const HUNDRED     = 100;
  for(let x = 0; x < tickets[0]; x++){
    if(sum < THOUSAND){
      break;
    }else{
      sum -= THOUSAND;
      thousand_tickets += 1;
    }
  }

  for(let y = 0; y < tickets[1]; y++){
    if(sum < FIVE_HUNDRED){
      break;
    }else{
      sum -= FIVE_HUNDRED;
      five_hundred_tickets += 1;
    }
  }

  for(let z = 0; z < tickets[2]; z++){
    if(sum < HUNDRED){
      break;
    }else{
      sum -= HUNDRED;
      hundred_tickets += 1;
    }
  }
  return `使用できる割引券は、1000円割引${thousand_tickets}枚、500円割引${five_hundred_tickets}枚、100円割引${hundred_tickets}枚です。`;
}


//支払金額合計算出
function payment(total, tickets){
  let sum = total;
  const THOUSAND    = 1000;
  const FIVE_HUNDRED = 500;
  const HUNDRED     = 100;
  for(let x = 0; x < tickets[0]; x++){
    if(sum < THOUSAND){
      break;
    }else{
      sum -= THOUSAND;
    }
  }

  for(let y = 0; y < tickets[1]; y++){
    if(sum < FIVE_HUNDRED){
      break;
    }else{
      sum -= FIVE_HUNDRED;
    }
  }

  for(let z = 0; z < tickets[2]; z++){
    if(sum < HUNDRED){
      break;
    }else{
      sum -= HUNDRED;
    }
  }
  return `割引後の支払金額は${sum}円です。`;
}

//結果メッセージ表示
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
