class MessagesController < ApplicationController

  def index
  end

  def create
    redirect_to group_messges_path, notice: 'メッセージが送信されました'
  end
  
end
