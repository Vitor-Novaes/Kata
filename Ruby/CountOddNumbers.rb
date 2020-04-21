def oddCount n 
    return (n/2) if n.even?
    (n-1)/2
end

n = gets.to_i
puts oddCount(n)

# describe "Count of odd numbers" do
#   it "Basic tests" do  
#     Test.assert_equals(oddCount(15),7)
#     Test.assert_equals(oddCount(15023),7511)    
#   end
# end