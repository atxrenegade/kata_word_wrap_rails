class WrappersController < ApplicationController
  def new 
    @wrapped_word = Wrapper.new
  end 
  
  def create 
    col_num = wrappers_params[0].to_i
    user_str = wrappers_params[1]
    @wrapped_word = Wrapper.wrap(col_num, user_str)
    render :show
  end 
  
  def show
  end 

  private
  def wrappers_params
    params.require([:col_num, :user_str])
  end 
end
