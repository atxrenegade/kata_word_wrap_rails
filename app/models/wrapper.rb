class Wrapper 
    def self.wrap(col_num, user_str)
        word_arr = user_str.split(" ")
        new_str = ""
        col_idx = 0

        word_arr.each do |word|
            if (col_idx > col_num || (col_idx + word.length) > col_num)
                test_char = new_str.slice(-1)
                if (test_char != "\n") then new_str.concat("\n") end
                col_idx = 0
            end

            if (word.length > col_num)
                while (word.length > col_num) do
                    new_str = new_str + "#{word[0...col_num - 1]}-\n"
                    col_index = word[0...col_num - 1].length
                    word = word.slice(col_num -1, word.length) 
                end  
            end   
                
            if (word.length <= col_num)
                new_str += "#{word} "
                col_idx += word.length + 1
            end  
        end  
        puts(new_str)
    end
end   
