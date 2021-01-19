class Wrapper 
  #TO DO fix this algorithm
  # condense head a tail to one block

  def self.wrap(col_num, user_str) 
      user_str_arr = user_str.split()
      new_str = ""
      col_count = 0

      user_str_arr.each_with_index do |word, index|
          word_len = word.length
          if ((word_len + index) < col_num) 
              new_str += "#{word}"
              col_count += (wordLen + 1)
          elsif (word_len > col_num) 
              while (word.length >= col_num)
                  new_str += "<br/>#{word[0..(col_num - 2)]}-<br/>#{word[(col_num - 2)..-1]} "
                  col_count = word[col_num..-1].length;
                  word = word[col_num..-1]
              end    
          else 
              new_str += "<br/>#{word} "
              col_count = word_len
          end
      end
      return new_str
  end 
end   
