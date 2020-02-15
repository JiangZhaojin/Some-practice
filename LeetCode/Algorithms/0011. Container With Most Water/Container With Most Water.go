package leetcode

func maxArea(heights []int) int {
	max, start, end := 0, 0, len(heights)-1
	for start < end {
		width := end - start
		high := 0
		if heights[start] < heights[end] {
			high = heights[start]
			start++
		} else {
			high = heights[end]
			end--
		}
		temp := width * high
		if max < temp {
			max = temp
		}
	}
	return max
}
