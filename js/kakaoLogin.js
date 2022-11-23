window.Kakao.init('612a7d36236762ece4908077b218ccec'); //발급받은 키 중 javascript키를 사용해준다.
console.log(Kakao.isInitialized()); // sdk초기화여부판단
//카카오로그인
$("#kakao-login-btn").on("click", function(){
  //1. 로그인 시도
  Kakao.Auth.login({
      success: function(authObj) {
       
        //2. 로그인 성공시, API 호출
        Kakao.API.request({
          url: '/v2/user/me',
          success: function(res) {
            console.log(res);
            var id = res.id;
      scope : 'account_email';
    alert('로그인성공');
            location.href="callback주소";
  

            
      }
        })
        console.log(authObj);
        var token = authObj.access_token;
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
      
}) //

