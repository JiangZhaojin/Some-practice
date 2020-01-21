package leetcode

func getLongestSubstring(str string) int {
	length := len(str)
	if length == 0 {
		return 0
	}
	var freq [256]int
	result := 1
	left, right := 0, 0
	for left < length && right < length {
		if freq[str[right]-'a'] == 0 {
			freq[str[right]-'a']++
			right++
		} else {
			freq[str[left]-'a']--
			left++
		}
		result = max(result, right-left)
	}
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
