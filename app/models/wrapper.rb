class Wrapper 
    def self.wrap(col_num, user_str)
        # split user_str to array to iterate over 
        # set value for index of char in column 
        word_arr = user_str.split(" ")
        new_str = ""
        col_idx = 0

        word_arr.each do |word|
            # prevent duplication of line breaks by check last char in
            # new string array, add line break if not present
            if (col_idx > col_num || (col_idx + word.length) > col_num)
                test_char = new_str.slice(-1)
                if (test_char != "<br>") then new_str.concat("<br>") end
                col_idx = 0
            end

            # check for words larger than max column value
            # break up large words until remaining segment is 
            # smaller than max column width, update column index value
            if (word.length > col_num)
                while (word.length > col_num) do
                    new_str = new_str + "#{word[0...col_num - 1]}-<br>"
                    col_index = word[0...col_num - 1].length
                    word = word.slice(col_num -1, word.length) 
                end  
            end   
            
            # add words smaller than max column value and
            # word segment remaining from large words to string
            # with whitespace, unpdate column index value
            if (word.length <= col_num)
                new_str += "#{word} "
                col_idx += word.length + 1
            end  
        end  
        return(new_str)
    end
end   
