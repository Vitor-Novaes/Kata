def getCount(inputStr)
   inputStr.downcase.count "aeiou"
end

inputStr = gets
count = getCount(inputStr)
puts count
