$(function(){

  function buildHTML(message){
    if(message.image) {
      var html = `<div class="message">
                    <div class="ChatMain__MessagesList__box">
                      <div class="ChatMain__MessagesList__box__group">
                        <div class="ChatMain__MessagesList__box__group--name">
                          ${message.user_name}
                        </div>
                        <div class="ChatMain__MessagesList__box__group--date">
                          ${message.created_at}
                        </div>
                      </div>
                        <div class="ChatMain__MessagesList__box__message">
                          <p class="ChatMain__MessagesList__box__message__content">
                            ${message.content}
                          </p>
                        </div>
                        <img src=${message.image} >
                      </div>
                    </div>
                  </div>`
      return html;
    } else {
      var html = `<div class="message">
                    <div class="ChatMain__MessagesList__box">
                      <div class="ChatMain__MessagesList__box__group">
                        <div class="ChatMain__MessagesList__box__group--name">
                          ${message.user_name}
                        </div>
                        <div class="ChatMain__MessagesList__box__group--date">
                          ${message.created_at}
                        </div>
                      </div>
                        <div class="ChatMain__MessagesList__box__message">
                          <p class="ChatMain__MessagesList__box__message__content">
                          ${message.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url:  url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData:  false,
      contentType:  false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.ChatMain__MessageForm__FormBox--SendBtn').prop("disabled", false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  });

});