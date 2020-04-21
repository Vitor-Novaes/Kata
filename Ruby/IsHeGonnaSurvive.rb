def hero(bullets, dragons)
    return false if dragons*2 > bullets
    true
end

# Test.assert_equals(hero(10, 5), true)
# Test.assert_equals(hero(7, 4), false)
# Test.assert_equals(hero(4, 5), false)
# Test.assert_equals(hero(100, 40), true)
# Test.assert_equals(hero(1501, 751), false)
# Test.assert_equals(hero(0, 1), false)