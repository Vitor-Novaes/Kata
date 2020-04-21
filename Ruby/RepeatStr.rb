def repeat_str (n, s)
    result = ""
    for c in 1..n
        result << s
    end
    result
end

# Test.describe("Example test cases") do
#     Test.assert_equals(repeat_str(3, "*"),"***")
#     Test.assert_equals(repeat_str(5, "#"),"#####")
#     Test.assert_equals(repeat_str(2, "ha "),"ha ha ")
# end

# Best practices
def repeat_str (n, s)
  s*n
end