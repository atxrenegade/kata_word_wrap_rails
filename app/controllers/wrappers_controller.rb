class WrappersController < ApplicationController
  def new 
    @wrapped_word = Wrapper.new
  end 
  
  def create 
    @wrapped_word = Wrapper.wrap(params[:col_num].to_i, params[:user_str])
    render :show
  end 
  
  def show
  end 
end
