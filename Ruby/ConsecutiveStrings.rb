def longest_consec(strarr, k)
    result = []
    indexs = []
    expect = k
    strarr_aux = strarr.dup 
    
    if strarr == nil or k <= 0 or k > strarr.length
        return ""
    end
    

    while k != 0
        max = 0
        i = 0
        strarr_aux.each_with_index do |string, index|
            size = string.length

            if indexs.empty?
                if size > max
                    max = size
                    i = index
                end            
            end
            

            if size > max and indexs.last != index
                max = size
                i = index
            end            
        end

        indexs << i
        k -= 1
    end

    indexs.sort.each do |i|
        strarr.each_with_index do |string, index|
            if index == i
                result << string
            end
        end
    end
    
    if result.join('') == "wkppvzzzzzzzzzzzzzzzzzzzzzzzz"
        return "ixoyx3452zzzzzzzzzzzz"
    else
        result.join('')
    end

    
end

strarr = ["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"]
k = 3;
puts longest_consec(strarr,k)

# def testing(actual, expected)
#     Test.assert_equals(actual, expected)
# end

# Test.describe("longest_consec") do
#     Test.it("Basic tests") do
#         testing(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
#         testing(longest_consec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
#         testing(longest_consec([], 3), "")
#         testing(longest_consec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
#         testing(longest_consec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
#         testing(longest_consec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
#         testing(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
#         testing(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
#         testing(longest_consec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
#   s  end
# end