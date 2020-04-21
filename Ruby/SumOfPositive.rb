def positive_sum(arr)
    sum = 0
    arr.each do |element|
        if element > 0
            sum += element
        end
    end
    sum
end

# Best Practices
def positive_sum(arr)
  arr.select{|x| x > 0}.reduce(0, :+)
end
