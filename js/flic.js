
  $(document).ready(function()
  {
      /** ①初期メッセージ出力 */
      $("#msg").text("スマホで下の枠を指でスワイプしてください");
   
      /** ②指が触れたか検知 */
      $("#box").on("touchstart", start_check);
   
      /** ③指が動いたか検知 */
      $("#box").on("touchmove", move_check);
   
      /** ④指が離れたか検知 */
      $("#box").on("touchend", end_check);
   
      /** 変数宣言 */
      var moveY, moveX , posiY, posiX;
   
   
      // ⑤タッチ開始時の処理
      function start_check(event) 
      {
          /** 現在の座標取得 */
          posiY = getY(event);
          posiX = getX(event);
   
          /** 移動距離状態を初期化 */
          moveY = '';
          moveX = '';
   
          /** 表示メッセージを初期化 */
          msgY = '';
          msgX = '';
      }
   
      // ⑥スワイプ中の処理
      function move_check(event)
      {
          if (posiX - getX(event) > 70) // 70px以上移動でスワイプと判断
          {
              /** 右→左と判断 */
              moveX = "left";
          }
          else if (posiX - getX(event) < -70)  // 70px以上移動でスワイプと判断
          {
              /** 左→右と判断 */			
              moveX = "right";
          }
   
          if (posiY - getY(event) > 70) // 70px以上移動でスワイプと判断
          {
              /** 下→上と判断 */
              moveY = "top";
          }
          else if (posiY - getY(event) < -70)  // 70px以上移動でスワイプと判断
          {
              /** 上→下と判断 */			
              moveY = "bottom";
          }
      }
   
      // ⑦指が離れた時の処理
      function end_check(event)
      {
          if (moveX == "left")
          {
              msgX = "左へ移動";
          }
          else if (moveX == "right")
          {
              msgX = "右へ移動";
          }
          else
          {
              msgX = "移動なし";
          }
   
   
          if (moveY == "top")
          {
              msgY = "上へ移動";
          }
          else if (moveY == "bottom")
          {
              msgY = "下へ移動";
          }
          else
          {
              msgY = "移動なし";
          }
   
   
          $("#msg").text("（横移動）"+msgX+":"+"（縦移動）"+msgY);
   
      }
   
   
      // 座標取得処理
      function getY(event) 
      {
          //縦方向の座標を取得
          return (event.originalEvent.touches[0].pageY);
      }
   
      function getX(event) 
      {
          //横方向の座標を取得
          return (event.originalEvent.touches[0].pageX);
      }
   
   
  });
   
 
