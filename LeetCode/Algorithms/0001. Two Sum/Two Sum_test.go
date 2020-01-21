package leetcode

import (
	"fmt"
	"testing"
)

func TestTwoSum(t *testing.T) {
	tests := [][]int{
		[]int{3, 2, 4},
		[]int{3, 2, 4},
	}
	targets := []int{
		6,
		5,
	}
	results := [][]int{
		[]int{1, 2},
		[]int{0, 1},
	}
	fmt.Printf("-------------------Leetcode Problem1-------------------")
	for i := 0; i < len(targets); i++ {
		fmt.Printf("test = %v target = %v results = %v\n", tests[i], targets[i], twoSum(tests[i], targets[i]))
		if ret := twoSum(tests[i], targets[i]); ret[0] != results[i][0] || ret[1] != results[i][1] {
			t.Fatalf("case %d fails: %v\n", i, ret)
		}
	}
}
